<template>
  <!-- Header component -->
  <Header />

  <router-view />
</template>

<script>
import Header from "./Components/Header.vue";
import Login from "./Components/Login.vue";
import Register from "./Components/Register.vue";

export default {
  name: "App",
  components: {
    Header,
    Login,
    Register,
  },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
