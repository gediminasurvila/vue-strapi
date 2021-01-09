<template>
  <main-layout>
    <div>
      <h1>Blog</h1>
      <counter />
    </div>
    <template slot="footer">
      <div>Blog</div>
    </template>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/MainLayout';
import Counter from '../components/Counter';

export default {
  components: {
    MainLayout,
    Counter,
  },
  name: 'Blog',
};
</script>

<style scoped></style>
