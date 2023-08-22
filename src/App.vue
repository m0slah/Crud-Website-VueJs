<template>
  <!-- Header component -->
  <Header />
</template>

<script>
import Header from "./Components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
