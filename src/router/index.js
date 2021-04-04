import Vue from "vue";
import VueRouter from "vue-router";
import { auth } from "@/firebase";
Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ "../views/Home.vue"),
		meta: { requiresAuth: true },
	},
	{
		path: "/ingreso",
		name: "Ingreso",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ "../views/Ingreso.vue"),
	},
	{
		path: "/admin",
		name: "Admin",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ "../views/Admin.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});
router.beforeEach((to, from, next) => {
	const user = auth.currentUser;
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (user) {
			next();
		} else {
			next({ path: "ingreso" });
		}
	} else {
		next();
	}
});
export default router;
