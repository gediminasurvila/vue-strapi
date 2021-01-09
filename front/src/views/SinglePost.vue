<template>
  <main-layout>
    <div v-if="post">
      <h1>{{ post.title }}</h1>
      <div>{{ post.author.firstname }} {{ post.author.lastname }}</div>
      <vue-markdown>{{ post.body }}</vue-markdown>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/MainLayout';
import VueMarkdown from 'vue-markdown';
import { mapActions } from 'vuex';

export default {
  components: {
    MainLayout,
    VueMarkdown,
  },
  name: 'single-post',
  methods: {
    ...mapActions({
      getPostBySlug: 'blog/getPostBySlug',
    }),
  },
  computed: {
    post() {
      const slug = this.$route.params.slug;
      return this.$store.getters[`blog/getPostBySlug`](slug);
    },
  },
  created() {
    const slug = this.$route.params.slug;
    this.getPostBySlug(slug);
  },
};
</script>

<style></style>
