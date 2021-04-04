<template>
	<v-layout justify-center mt-5>
		<v-flex xs12 sm8 md6 xl4>
			<v-card>
				<v-card-text
					class="display-1 text-uppercase  white--text text-center"
					:class="registro ? 'success' : 'primary'"
				>
					<span v-if="!registro">Ingreso</span>
					<span v-if="registro">Registro</span>
				</v-card-text>

				<v-card-text>
					<v-btn block color="error" @click="google"> <v-icon right dark> </v-icon> Google</v-btn>
					<v-btn block color="info" @click="facebook"><v-icon right dark></v-icon>Facebook</v-btn>
				</v-card-text>

				<v-card-text>
					<v-btn block @click="registro = true" v-if="!registro"
						>¿No tienes cuenta? Registrate Aqui</v-btn
					>
					<v-btn block @click="registro = false" v-if="registro"
						>¿Ya tienes cuenta? Ingresa Aqui</v-btn
					>
				</v-card-text>
			</v-card>
		</v-flex>
	</v-layout>
</template>

<script>
import { firebase, auth, db } from "@/firebase";
import { mapMutations, mapActions } from "vuex";
import router from "@/router";

export default {
	data() {
		return {
			registro: false,
		};
	},
	methods: {
		...mapMutations(["setUsario"]),
		...mapActions(["callUsuario"]),
		facebook() {
			console.log("facebook");
			const provider = new firebase.auth.FacebookAuthProvider();
			this.ingresar(provider);
		},
		google() {
			console.log("google");
			const provider = new firebase.auth.GoogleAuthProvider();
			this.ingresar(provider);
		},
		async ingresar(provider) {
			firebase.auth().languageCode = "es";
			try {
				const result = await firebase.auth().signInWithPopup(provider);
				const user = result.user;
				console.log(user);

				//!Construir Usuario
				const usuario = {
					nombre: user.displayName,
					email: user.email,
					uid: user.uid,
					foto: user.photoURL,
				};
				this.callUsuario(usuario);
				//!Guardar en firetore

				await db
					.collection("usuarios")
					.doc(usuario.uid)
					.set(usuario);
				console.log("Usuario Guardado en DB");
				router.push({ path: "/" });
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style></style>
