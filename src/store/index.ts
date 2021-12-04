import { createStore } from 'vuex';
import { Block } from '@/types';
import { BLOCK_EMPTY } from '@/constants';

export default createStore({
  state: {
    currentBlock: null as Block | null,
    isDragging: false as boolean,
    dimension1: 6 as number,
    dimension2: 10 as number,
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
    setIsDragging(state, isDragging) {
      state.isDragging = isDragging;
    },
    setTrackPosition(state, { block, position }) {
      const coordinates = position.split('-');
      state.track[Number(coordinates[0])][Number(coordinates[1])] = block;
    },
  },
  actions: {
    // reinitialize() {},
    initialize({ state, commit }) {
      const track = [] as Block[][];
      const largeDimension: number = Math.max(state.dimension1, state.dimension2);
      const smallDimension: number = Math.min(state.dimension1, state.dimension2);
      const emptyBlock: Block = BLOCK_EMPTY;

      let nextRow: Block[] = [];
      for (let row = 0; row < smallDimension; row++) {
        nextRow = [];
        for (let col = 0; col < largeDimension; col++) {
          nextRow.push(emptyBlock);
        }
        track.push(nextRow);
      }

      commit('setTrack', track);
    },
  },
  modules: {},
});
