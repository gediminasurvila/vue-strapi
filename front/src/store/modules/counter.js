export default {
  namespaced: true,
  state: {
    count: 0,
  },
  mutations: {
    increase(state) {
      state.count = state.count + 1;
    },
    decrease(state) {
      state.count = state.count - 1;
    },
  },
  actions: {
    increase(context) {
      context.commit('increase');
    },
    decrease(context) {
      context.commit('decrease');
    },
  },
  getters: {
    count: (state) => state.count,
  },
};
