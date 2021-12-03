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
    setTrack(state, track) {
      state.track = track;
    },
  },
  actions: {
    // reinitialize() {},
    initialize({ state, commit }) {
      const track = [] as Block[][];
      const largeDimension: number = Math.max(state.dimension1, state.dimension2);
      const smallDimension: number = Math.min(state.dimension1, state.dimension2);
      const emptyBlock: Block = { type: 'empty' };

      let nextRow: Block[] = [];
      for (let row = 0; row < smallDimension; row++) {
        nextRow = [];
        for (let col = 0; col < largeDimension; col++) {
          nextRow.push(emptyBlock);
        }
        track.push(nextRow);
      }

      // const row = Array(this.width).fill({ type: 'default' });
      // this.blocks = Array(this.height).fill(row);
      commit('setTrack', track);
    },
  },
  modules: {},
});
