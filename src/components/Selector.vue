<template>
  <div class="selector" :class="{ isOpen: isOpen }" @click="isOpen = false">
    <div v-if="!isOpen" class="toggle" @click.stop="isOpen = !isOpen"></div>
    <div v-else>
      <div class="grid">
        <GridItem
          @click.stop="onTrackSelected(item.type)"
          v-for="item in gridItems"
          :key="item.name"
          :item="item"
          :effects="false"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GridItem from '@/components/GridItem.vue';
import { Block } from '@/types';

export default defineComponent({
  name: 'Selector',
  components: {
    GridItem,
  },
  data() {
    return {
      isOpen: false as boolean,
      gridItems: [
        { type: 'up-down' },
        { type: 'left-right' },
        { type: 'left-up' },
        { type: 'left-down' },
        { type: 'right-up' },
        { type: 'right-down' },
        { type: 'down-left' },
        { type: 'down-right' },
        { type: 'open-road' },
        { type: 'jump' },
        { type: 'table-top' },
        { type: 'landing' },
        { type: 'rhythm' },
      ] as Block[],
    };
  },
  methods: {
    onTrackSelected(trackType: string) {
      console.log('onTrackSelected', trackType);
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
  background-color: rgba(black, 0.3);
  width: 1vw;
  z-index: 6;
  transition: $animationTime all ease-in-out;

  &.isOpen {
    padding: 10px;
    width: 100%;
  }
}

.toggle {
  @include arrow;
  transform: rotate(-45deg);
  margin-left: -0.5vw;
  cursor: pointer;
}

.grid {
  display: grid;
  grid-template-columns: #{$blockSize} #{$blockSize};
  gap: $blockSpace;
}
</style>
