<template>
  <div class="bg-grey-3">
    <q-toolbar>
      <!-- <q-btn flat round dense icon="menu" @click="drawer = !drawer" /> -->
      <q-toolbar-title>CRUD Website</q-toolbar-title>
      <q-space />

      <!-- Home Button -->
      <q-btn v-if="!isHomeRoute" flat label="Home" @click="$router.push('/')">
        <q-icon class="q-mx-sm q-mb-xs" name="home" />
      </q-btn>

      <!-- Login Button (conditionally rendered) -->
      <q-btn
        v-if="!isHomeRoute"
        flat
        label="Login"
        @click="$router.push('/login')"
      >
        <q-icon class="q-mx-sm q-mb-xs" name="account_circle" />
      </q-btn>

      <!-- Sign Up Button -->
      <q-btn
        v-if="!isHomeRoute"
        flat
        label="Sign Up"
        @click="$router.push('/register')"
      >
        <q-icon class="q-mx-sm q-mb-xs" name="person_add" />
      </q-btn>

      <!-- Logout Button (conditionally rendered) -->
      <q-btn
        v-if="isHomeRoute"
        flat
        label="Logout"
        @click="$store.dispatch('logout')"
      >
        <q-icon class="q-mx-sm q-mb-xs" name="logout" />
      </q-btn>
    </q-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    isHomeRoute() {
      return this.$route.path === "/";
    },
  },
  methods: {
    logout() {
      this.$router.push("/login");
    },
  },
};
</script>
