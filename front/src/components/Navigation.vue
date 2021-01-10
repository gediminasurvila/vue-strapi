<template>
  <nav>
    <v-container>
      <v-row align="center" justify="space-around">
        <router-link to="/" tag="span"><v-btn text>Home</v-btn></router-link>
        <router-link to="/blog" tag="span"
          ><v-btn text>Blog</v-btn></router-link
        >
        <router-link to="/sign-up" tag="span"
          ><v-btn text>Sign up</v-btn></router-link
        >
        <router-link to="/login" tag="span"
          ><v-btn text>Login</v-btn></router-link
        >
      </v-row>
    </v-container>
  </nav>
</template>

<script>
export default {
  name: 'navigation',
};
</script>

<style scoped></style>
