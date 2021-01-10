import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home';
import Blog from '../views/Blog';
import SinglePost from '../views/SinglePost.vue';
import SignUp from '../views/SignUp.vue';
import Login from '../views/Login.vue';

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
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
