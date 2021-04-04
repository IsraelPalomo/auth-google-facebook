<template>
	<nav>
		<v-app-bar app color="primary" dark>
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

			<div class="d-flex align-center">
				<router-link :to="{ path: '/' }">
					<v-img
						alt="Vuetify Logo"
						class="shrink mr-2"
						contain
						src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
						transition="scale-transition"
						width="40"
					/>
				</router-link>

				<v-img
					alt="Vuetify Name"
					class="shrink mt-1 hidden-sm-and-down"
					contain
					min-width="100"
					src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
					width="100"
				/>
			</div>

			<v-spacer></v-spacer>

			<v-btn @click="cerrarSesion">
				<span class="mr-2">Cerrar Sesion</span>
				<v-icon>mdi-open-in-new</v-icon>
			</v-btn>
		</v-app-bar>

		<v-navigation-drawer class="primary" v-model="drawer" app>
			<v-layout column align-center mt-5>
				<v-flex>
					<v-avatar>
						<img :src="usuario.foto" alt="John" />
					</v-avatar>
				</v-flex>
				<v-flex>
					<p class="mt-3 white--text">{{ usuario.nombre }}</p>
				</v-flex>
			</v-layout>
			<v-divider></v-divider>
			<v-list>
				<v-list-item v-for="(item, index) in items" :key="index" :to="item.to.name">
					<v-list-item-content>
						<v-icon color="white"> {{ item.icon }}</v-icon>
					</v-list-item-content>
					<v-list-item-content>
						<v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
						<v-list-item-subtitle></v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
	</nav>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
	data() {
		return {
			drawer: true,
			items: [
				{ title: "Dashboard", icon: "fas fa-user-cog", to: { name: "ingreso" } },
				{ title: "Photos", icon: "fas fa-user-cog", to: { name: "ingreso" } },
				{ title: "Admin", icon: "fas fa-user-cog", to: { name: "admin" } },
			],
		};
	},
	methods: {
		...mapActions(["cerrarSesion"]),
	},
	computed: {
		...mapState(["usuario"]),
	},
};
</script>

<style></style>
