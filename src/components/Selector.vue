<template>
  <div class="selector" :class="{ isOpen: isOpen }" @click="isOpen = false">
    <div v-if="!isOpen" class="toggle" @click.stop="isOpen = !isOpen"></div>
    <div v-else>
      <div class="flex">
        <GridItem
          @click.stop="onTrackSelected(item)"
          v-for="item in gridItems"
          :key="item.name"
          :item="item"
          :animation-type="'grow'"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GridItem from '@/components/GridItem.vue';
import { Block } from '@/types';
import { mapMutations } from 'vuex';

export default defineComponent({
  name: 'Selector',
  components: {
    GridItem,
  },
  data() {
    return {
      isOpen: true as boolean,
      gridItems: [
        // Straightaways
        { type: 'up-down' },
        { type: 'up-down', barriers: ['left'] },
        { type: 'up-down', barriers: ['right'] },
        { type: 'up-down', barriers: ['left', 'right'] },
        { type: 'left-right' },
        { type: 'left-right', barriers: ['top'] },
        { type: 'left-right', barriers: ['bottom'] },
        { type: 'left-right', barriers: ['top', 'bottom'] },

        // Curves
        { type: 'left-up' },
        { type: 'left-down' },
        { type: 'right-up' },
        { type: 'right-down' },

        // Features
        // { type: 'jump' },
        // { type: 'table-top' },
        // { type: 'landing' },
        // { type: 'rhythm' },
        { type: 'bridge-left-right' },
        { type: 'bridge-right-left' },

        // Empty
        { type: 'stripes' },
      ] as Block[],
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
  padding: 20px;
  overflow-y: auto;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 1vw;
  background-color: rgba(black, 0.8);
  z-index: 6;
  transition: $animationTime all ease-in-out;

  &.isOpen {
    width: 100%;
    padding: 10px;
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
