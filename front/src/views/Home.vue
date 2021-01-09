<template>
  <main-layout>
    <div>
      <h1>{{ title }}</h1>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/MainLayout';

export default {
  components: { MainLayout },
  name: 'Home',
  data() {
    return {
      title: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
