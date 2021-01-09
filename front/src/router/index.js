import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home';
import Blog from '../views/Blog';
import SinglePost from '../views/SinglePost.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
    },
    {
      path: '/blog/:slug',
      name: 'SinglePost',
      component: SinglePost,
    },
  ],
});
