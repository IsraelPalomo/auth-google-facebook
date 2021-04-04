import Vue from "vue";
import Vuex from "vuex";
import { auth } from "@/firebase";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		usuario: {},
	},
	mutations: {
		setUsuario(state, payload) {
			state.usuario = payload;
		},
	},
	actions: {
		callUsuario({ commit }, user) {
			const usuario = {
				nombre: user.displayName,
				email: user.email,
				uid: user.uid,
				foto: user.photoURL,
			};

			commit("setUsuario", usuario);
		},

		cerrarSesion({ commit }) {
			auth
				.signOut()
				.then(() => {
					commit("setUsuario", null);
					router.push({ path: "ingreso" });
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},
	modules: {},
});
