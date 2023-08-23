<template>
  <div class="q-pa-xl text-center">
    <q-form @submit="login">
      <q-input
        v-model="email"
        label="Email"
        type="email"
        outlined
        dense
        required
      />
      <q-input
        class="q-mt-sm"
        v-model="password"
        label="Password"
        type="password"
        outlined
        dense
      />
      <q-btn
        class="q-mt-sm"
        type="submit"
        color="dark"
        label="Login"
        :loading="loading"
      />
    </q-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "test@test.com",
      password: "",
      loading: false,
      isValid: false,
    };
  },
  computed: {
    isValidForm() {
      return this.email !== "" && this.password !== "";
    },
  },
  methods: {
    async login() {
      if (this.isValidForm) {
        this.loading = true;

        if (!this.isValidForm) {
          console.log("you can not logined");
        } else {
          this.$router.push({ name: "Home" }); // Assuming "Register" is the name of your home route
          console.log(this.email);
          console.log(this.password);
        }
        try {
          await new Promise((resolve) => setTimeout(resolve, 1500));

          this.email = "";
          this.password = "";
          this.loading = false;
        } catch (error) {
          // Display an error message
          this.$q.notify({
            color: "negative",
            message: "Login failed. Please check your credentials.",
          });

          // Reset loading state
          this.loading = false;
        }
      }
    },
  },
};
</script>
