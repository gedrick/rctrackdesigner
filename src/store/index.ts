import { createStore } from 'vuex';

export default createStore({
  state: {
    dimension1: 6,
    dimension2: 10,
  },
  mutations: {
    setDimension1(state, dimension: number) {
      state.dimension1 = dimension;
    },
    setDimension2(state, dimension: number) {
      state.dimension2 = dimension;
    },
  },
  actions: {},
  modules: {},
});
