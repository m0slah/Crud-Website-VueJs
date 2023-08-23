<template>
  <div class="q-pa-xl text-center">
    <q-form @submit="register">
      <q-input v-model="name" label="Name" outlined dense required />
      <q-input
        class="q-mt-sm"
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
        required
      />
      <q-input
        class="q-mt-sm"
        v-model="confirmPassword"
        label="Confirm Password"
        type="password"
        outlined
        dense
        required
      />
      <q-btn
        class="q-mt-sm"
        type="submit"
        color="dark"
        label="Register"
        :loading="loading"
        :disable="!isValidForm"
      />
    </q-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      loading: false,
    };
  },
  computed: {
    isValidForm() {
      return (
        this.name !== "" &&
        this.email !== "" &&
        this.password !== "" &&
        this.confirmPassword !== ""
      );
    },
  },
  methods: {
    async register() {
      if (this.isValidForm) {
        this.loading = true;

        try {
          // Simulate registration process here
          // Replace this with your actual registration logic
          await new Promise((resolve) => setTimeout(resolve, 1500));

          // Display a success message
          this.$q.notify({
            color: "positive",
            message: "Registration successful!",
          });

          // Reset form and loading state
          this.name = "";
          this.email = "";
          this.password = "";
          this.confirmPassword = "";
          this.loading = false;
        } catch (error) {
          // Display an error message
          this.$q.notify({
            color: "negative",
            message: "Registration failed. Please try again.",
          });

          // Reset loading state
          this.loading = false;
        }
      }
    },
  },
};
</script>
