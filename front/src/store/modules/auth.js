import axios from 'axios';
import router from '../../router';

export default {
  namespaced: true,
  state: {
    user: JSON.parse(window.localStorage.getItem('vuex'))?.auth?.user || {},
    jwt: JSON.parse(window.localStorage.getItem('vuex'))?.auth?.jwt || '',
  },
  mutations: {
    register(state, payload) {
      state.user = payload.user;
      state.jwt = payload.jwt;
    },
    login(state, payload) {
      state.jwt = payload.jwt;
      state.user = payload.user;
    },
    logout(state) {
      state.jwt = '';
      state.user = {};
    },
  },
  actions: {
    async register(context, payload) {
      const res = await axios.post(
        `${process.env.VUE_APP_API_BASE}/auth/local/register`,
        payload
      );
      context.commit('register', res.data);
      router.push({ path: '/' });
    },
    async login(context, payload) {
      const res = await axios.post(
        `${process.env.VUE_APP_API_BASE}/auth/local`,
        payload
      );
      context.commit('login', res.data);
      router.push({ path: '/' });
    },
    logout(context) {
      if (router.app.$route.path !== '/') {
        router.push({ path: '/' });
      }
      localStorage.removeItem('vuex');
      context.commit('logout');
    },
  },
  getters: {
    isLoggedIn(state) {
      if (state.jwt) {
        return true;
      } else {
        return false;
      }
    },
  },
};
