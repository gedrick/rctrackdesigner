<template>
  <div class="selector" :class="{ isOpen: isOpen }" @click="isOpen = !isOpen">
    <div v-if="!isOpen" class="toggle" @click.stop="isOpen = !isOpen"></div>
    <div v-else>
      <div class="flex">
        <GridItem
          v-for="item in gridItems"
          :key="item.id"
          :item="item"
          :animation-type="'grow'"
          @click.stop="onTrackSelected(item)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GridItem from '@/components/GridItem.vue';
import type { Block } from '@/types';
import { mapMutations } from 'vuex';
import * as BlockTypes from '@/constants';

export default defineComponent({
  name: 'Selector',
  components: {
    GridItem,
  },
  data() {
    return {
      isOpen: true as boolean,
      gridItems: [
        // Empty
        // BlockTypes.BLOCK_EMPTY,
        BlockTypes.BLOCK_STRIPES,

        // Straightaways
        BlockTypes.BLOCK_UP_DOWN,
        // BlockTypes.BLOCK_UP_DOWN_LEFT,
        // BlockTypes.BLOCK_UP_DOWN_RIGHT,
        // BlockTypes.BLOCK_UP_DOWN_LEFT_RIGHT,
        BlockTypes.BLOCK_LEFT_RIGHT,
        // BlockTypes.BLOCK_LEFT_RIGHT_TOP,
        // BlockTypes.BLOCK_LEFT_RIGHT_BOTTOM,
        // BlockTypes.BLOCK_LEFT_RIGHT_TOP_BOTTOM,

        // Curves
        BlockTypes.BLOCK_RIGHT_DOWN,
        BlockTypes.BLOCK_LEFT_DOWN,
        BlockTypes.BLOCK_RIGHT_UP,
        BlockTypes.BLOCK_LEFT_UP,

        // Features
        BlockTypes.BLOCK_JUMP,
        BlockTypes.BLOCK_TABLE_TOP,
        BlockTypes.BLOCK_LANDING,
        BlockTypes.BLOCK_WHOOPS,

        BlockTypes.BLOCK_BRIDGE_UP_DOWN,
        BlockTypes.BLOCK_BRIDGE_LEFT_RIGHT,
      ],
    };
  },
  methods: {
    ...mapMutations(['setCurrentBlock']),
    onTrackSelected(block: Block) {
      this.setCurrentBlock(block);
      this.isOpen = false;
    },
  },
});
</script>

<style lang="scss" scoped>
.selector {
  padding: 10px;
  overflow-y: auto;
  position: fixed;
  left: 0;
  top: 0;
  height: 2vw;
  width: 100%;
  background-color: rgba(black, 0.8);
  z-index: 6;
  transition: $animationTime all ease-in-out;

  &.isOpen {
    height: 100%;
  }
}

.toggle {
  @include arrow;
  transform: rotate(-45deg);
  margin-left: -0.5vw;
  cursor: pointer;
}

.flex {
  display: flex;
  flex-direction: row;
  flex-basis: 100%;
  flex-wrap: wrap;
  gap: $blockSpace;
}
</style>
