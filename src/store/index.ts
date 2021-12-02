import { createStore } from 'vuex';
import { Block } from '@/types';

export default createStore({
  state: {
    currentBlock: null as Block | null,
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
    setCurrentBlock(state, block: Block) {
      state.currentBlock = block;
    },
    // generateMap(state) {
    // const row: Array<Block> = state.dimension1.fill({ name: 'none', type: 'none' });
    // state.track = Array<Array>(this.height).fill(row);
    // },
  },
  actions: {},
  modules: {},
});
