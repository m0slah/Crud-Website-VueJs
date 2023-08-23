<template>
  <div class="q-pa-xl text-center">
    <q-form @submit.prevent="register">
      <q-input
        v-model="register_form.name"
        label="Name"
        outlined
        dense
        required
      />
      <q-input
        class="q-mt-sm"
        v-model="register_form.email"
        label="Email"
        type="email"
        outlined
        dense
        required
      />
      <q-input
        class="q-mt-sm"
        v-model="register_form.password"
        label="Password"
        type="password"
        outlined
        dense
        required
      />
      <!-- <q-input
        class="q-mt-sm"
        label="Confirm Password"
        type="password"
        outlined
        dense
        required
      /> -->
      <q-btn class="q-mt-sm" type="submit" color="dark" label="Register" />
    </q-form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const register_form = ref({});
    const store = useStore();

    const register = () => {
      store.dispatch("register", register_form.value);
    };

    return {
      register_form,
      register,
    };
  },
};
</script>
