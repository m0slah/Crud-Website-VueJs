<template>
  <q-layout view="hHh Lpr lFf">
    <q-header class="bg-dark" elevated>
      <q-toolbar>
        <q-btn flat round dense icon="menu" @click="drawer = !drawer" />
        <q-toolbar-title>My Navbar</q-toolbar-title>
        <q-space />

        <!-- Home Button -->
        <q-btn flat label="Home" @click="$router.push('/')">
          <q-icon class="q-mx-sm q-mb-xs" name="home" />
        </q-btn>

        <!-- Login Button -->
        <q-btn flat label="Login" @click="$router.push('/login')">
          <q-icon class="q-mx-sm q-mb-xs" name="account_circle" />
        </q-btn>

        <!-- Sign Up Button -->
        <q-btn flat label="Sign Up" @click="$router.push('/signup')">
          <q-icon class="q-mx-sm q-mb-xs" name="person_add" />
        </q-btn>
      </q-toolbar>
    </q-header>
    <!-- ... rest of the layout code ... -->
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
