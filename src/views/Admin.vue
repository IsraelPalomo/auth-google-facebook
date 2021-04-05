<template>
	<v-layout justify-center>
		<v-flex xs6>
			<v-card class="text-center">
				<v-card-text>
					<v-avatar>
						<img :src="usuario.foto" alt="John" />
					</v-avatar>
				</v-card-text>
				<v-card-text>
					<h3>{{ usuario.nombre }}</h3>
				</v-card-text>
				<input type="file" ref="boton" class="d-none" @change="buscarImagen($event)" />
				<v-card-text>
					<v-btn color="primary" @click="$refs.boton.click()">Buscar Imagen</v-btn>
					<v-btn color="secondary" :disabled="file === null" @click="subirImagen" :loading="loading"
						>Subir Imagen</v-btn
					>
				</v-card-text>
				<v-card-text v-if="file"
					><h4>{{ file.name }}</h4></v-card-text
				>
				<v-img :src="urlTemporal"></v-img>
			</v-card>
		</v-flex>
	</v-layout>
</template>

<script>
import { mapState } from "vuex";
import { firebase, storage, db } from "@/firebase";
export default {
	computed: {
		...mapState(["usuario"]),
	},
	data() {
		return {
			file: null,
			urlTemporal: null,
			loading: false,
		};
	},
	methods: {
		buscarImagen(event) {
			console.log(event.target.files[0]);
			this.file = event.target.files[0];
			const reader = new FileReader();
			reader.readAsDataURL(this.file);
			reader.onload = (e) => {
				//console.log(e.target.result);
				this.urlTemporal = e.target.result;
			};
		},
		async subirImagen() {
			try {
				this.loading = true;
				const refImagen = storage
					.ref()
					.child(this.usuario.email)
					.child("foto perfil");
				const res = await refImagen.put(this.file);
				console.log(res);
				const urlDescarga = await refImagen.getDownloadURL();
				console.log(urlDescarga);
				this.usuario.foto = urlDescarga;
				await db
					.collection("usuarios")
					.doc(this.usuario.uid)
					.update({ foto: urlDescarga });
			} catch (error) {
				console.log(error);
			} finally {
				this.loading = false;
			}
		},
	},
};
</script>

<style></style>
