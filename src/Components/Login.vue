<template>
  <div class="q-pa-xl text-center">
    <q-form @submit="login">
      <q-input
        v-model="login_form.email"
        label="Email"
        type="email"
        outlined
        dense
        required
      />
      <q-input
        class="q-mt-sm"
        v-model="login_form.password"
        label="Password"
        type="password"
        outlined
        dense
      />
      <q-btn class="q-mt-sm" type="submit" color="dark" label="Login" />
    </q-form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  data() {
    return {
      email: "test@test.com",
      password: "",
      loading: false,
      isValid: false,
    };
  },
  setup() {
    const login_form = ref({});
    const store = useStore();

    const login = () => {
      store.dispatch("login", login_form.value);
    };

    return {
      login_form,
      login,
    };
  },
};
</script>

<!-- Add the following import statements -->
<style>
/* Your component's style definitions go here */
</style>
