<template>
	<div class="home">
		<v-card>
			<v-layout class="card"
				><h1 class="text">Bienvenido {{ usuario.nombre }}</h1></v-layout
			>
		</v-card>
	</div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
export default {
	computed: {
		...mapState(["usuario"]),
	},
};
</script>
<style scoped>
.text {
	width: 50%;
	margin: 5rem auto;
	text-align: center;
	margin-top: 5rem;
	color: white;
}
.card {
	background: cornflowerblue;
}
</style>
