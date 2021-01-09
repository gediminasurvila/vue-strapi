import Vue from 'vue';
import Vuex from 'vuex';
import blog from './modules/blog';
import counter from './modules/counter';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        blog,
        counter
    },
});