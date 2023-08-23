import { createApp } from "vue";
import { Quasar } from "quasar";
import "./assets/main.css";
import router from "./router";
import store from "./store";
import App from "./App.vue";

import "@quasar/extras/material-icons/material-icons.css";

import "quasar/src/css/index.sass";

const myApp = createApp(App);

myApp.use(Quasar, {
  plugins: {},
});

myApp.use(router).use(store).mount("#app");
