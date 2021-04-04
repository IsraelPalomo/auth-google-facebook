<template>
	<v-app>
		<nav-bar></nav-bar>
		<v-main>
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<script>
import NavBar from "../src/components/NavBar";

export default {
	name: "App",

	components: { NavBar },

	methods: {},
};
</script>
