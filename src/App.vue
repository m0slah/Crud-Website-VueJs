<template>
  <!-- Header component -->
  <Header />

  <router-view />
</template>

<script>
import Header from "./Components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>
