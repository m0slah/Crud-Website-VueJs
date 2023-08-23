import { createRouter, createWebHistory } from "vue-router";
import Home from "../Components/Home.vue";
import Register from "../Components/Register.vue";
import Login from "../Components/Login.vue";
import NotFound from "../Components/NotFound.vue";
import { auth } from "../firebase/index.js";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/:catchAll(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === "Login" && auth.currentUser) {
    next({ name: "Home" });
    return;
  }

  if (to.matched.some((record) => record.meta.authRequired) && !auth.currentUser) {
    next({ name: "Login" });
    return;
  }

  next();
});

export default router;
