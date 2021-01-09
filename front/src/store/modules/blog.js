import axios from 'axios';

export default {
  namespaced: true,
  state: {
    posts: [],
  },
  mutations: {
    setPosts(state, payload) {
      state.posts = payload;
    },
    setUpdateSelected(state, payload) {
      state.posts.forEach((post) => {
        if (post.id === payload.id) {
          post = payload;
        }
      });
    },
  },
  actions: {
    async getPosts(context) {
      const res = await axios.get('http://localhost:1337/blog-posts');
      context.commit('setPosts', res.data);
    },
    async getPostBySlug(context, payload) {
      if (!context.state.posts.length) {
        await context.dispatch('getPosts');
      }
      // find id by slug
      const found = context.state.posts.filter((post) => post.slug === payload);
      const res = await axios.get(
        `http://localhost:1337/blog-posts/${found[0].id}`
      );
      context.commit('setUpdateSelected', res.data);
    },
  },
  getters: {
    getAllPosts(state) {
      return state.posts.reverse();
    },
    getPostBySlug: (state) => (slug) => {
      return state.posts.find((post) => post.slug === slug);
    },
  },
};
