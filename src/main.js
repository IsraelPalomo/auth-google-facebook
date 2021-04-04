import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { auth } from "@/firebase";

Vue.config.productionTip = false;
auth.onAuthStateChanged((user) => {
	if (user) {
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/firebase.User

		store.dispatch("callUsuario", user);
		// ...
	}
	new Vue({
		router,
		store,
		vuetify,
		render: (h) => h(App),
	}).$mount("#app");
});
