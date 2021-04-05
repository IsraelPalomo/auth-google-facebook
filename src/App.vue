<template>
	<v-app>
		<nav-bar v-if="usuario != ''"></nav-bar>
		<v-main>
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<script>
import NavBar from "../src/components/NavBar";
import { mapState } from "vuex";

export default {
	name: "App",

	components: { NavBar },
	computed: {
		...mapState(["usuario"]),
	},

	methods: {},
};
</script>
