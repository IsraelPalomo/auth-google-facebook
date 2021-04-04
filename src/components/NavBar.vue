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
			<v-list>
				<v-list-item v-for="(item, index) in items" :key="index">
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
import { mapActions } from "vuex";

export default {
	data() {
		return {
			drawer: true,
			items: [
				{ title: "Dashboard", icon: "fas fa-user-cog" },
				{ title: "Photos", icon: "fas fa-user-cog" },
				{ title: "About", icon: "fas fa-user-cog" },
			],
		};
	},
	methods: {
		...mapActions(["cerrarSesion"]),
	},
};
</script>

<style></style>
