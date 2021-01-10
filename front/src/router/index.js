import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home';
import Blog from '../views/Blog';
import SinglePost from '../views/SinglePost.vue';
import SignUp from '../views/SignUp.vue';
import Login from '../views/Login.vue';

Vue.use(Router);

const router = new Router({
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
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp,
      meta: {
        guest: true,
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        guest: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const storage = JSON.parse(localStorage.getItem('vuex'));
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!storage?.auth?.jwt) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath },
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    if (!storage?.auth?.jwt) {
      next();
    } else {
      next({ name: 'Home' });
    }
  } else {
    next();
  }
});

export default router;
