<template>
  <main-layout>
    <div>
      <h1>Blog</h1>
    </div>
    <template slot="footer">
      <div>Blog</div>
    </template>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/MainLayout';

export default {
  components: { MainLayout },
  name: 'Blog',
};
</script>

<style scoped></style>
