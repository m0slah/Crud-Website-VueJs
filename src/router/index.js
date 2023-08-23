import { createRouter, createWebHistory } from "vue-router";

import Home from "../Components/Home.vue";
import Register from "../Components/Register.vue";
import Login from "../Components/Login.vue";
import NotFound from "../Components/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
const BASE_URL = window.location.href; // Set the base URL manually based on your needs
const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes,
});

export default router;
