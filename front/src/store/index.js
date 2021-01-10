import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist'
import blog from './modules/blog';
import counter from './modules/counter';
import auth from './modules/auth';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  modules: {
    blog,
    counter,
    auth
  },
  plugins: [vuexLocal.plugin]
});
