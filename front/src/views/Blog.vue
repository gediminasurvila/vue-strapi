<template>
  <main-layout>
    <div>
      <h1>Blog</h1>
      <!-- <counter /> -->
      <div v-for="post in posts" :key="post.id">
        <h2><router-link :to="{path: `/blog/${post.slug}`}">{{ post.title }}</router-link></h2>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/MainLayout';
// import Counter from '../components/Counter';
import { mapActions } from 'vuex';

export default {
  components: {
    MainLayout,
    // Counter,
  },
  name: 'Blog',
  computed: {
    posts() {
      return this.$store.getters['blog/getAllPosts'];
    },
  },
  methods: {
    ...mapActions({
      getPosts: 'blog/getPosts',
    }),
  },
  created() {
    console.log('created');
    this.getPosts();
  },
};
</script>

<style scoped></style>
