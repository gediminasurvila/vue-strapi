<template>
  <nav>
    <v-container>
      <v-row align="center" justify="space-around">
        <router-link to="/" tag="span"><v-btn text>Home</v-btn></router-link>
        <router-link to="/blog" tag="span"
          ><v-btn text>Blog</v-btn></router-link
        >
        <router-link v-if="!isLoggedIn" to="/sign-up" tag="span"
          ><v-btn text>Sign up</v-btn></router-link
        >
        <router-link v-if="!isLoggedIn" to="/login" tag="span"
          ><v-btn text>Login</v-btn></router-link
        >
        <v-btn @click="logout" text v-if="isLoggedIn">Logout</v-btn>
      </v-row>
    </v-container>
  </nav>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'navigation',
  computed: {
    isLoggedIn() {
      return this.$store.getters['auth/isLoggedIn'];
    },
  },
  methods: {
    ...mapActions({
      logout: 'auth/logout',
    }),
  },
};
</script>

<style scoped></style>
