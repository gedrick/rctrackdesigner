import { createStore } from 'vuex';

type Block = {
  name: string;
  type: string;
};

export default createStore({
  state: {
    dimension1: 6,
    dimension2: 10,
    track: [] as Block[][],
  },
  mutations: {
    setDimension1(state, dimension: number) {
      state.dimension1 = dimension;
    },
    setDimension2(state, dimension: number) {
      state.dimension2 = dimension;
    },
    // generateMap(state) {
    // const row: Array<Block> = state.dimension1.fill({ name: 'none', type: 'none' });
    // state.track = Array<Array>(this.height).fill(row);
    // },
  },
  actions: {},
  modules: {},
});
