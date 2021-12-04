<template>
  <div class="block-column">
    <div v-for="(blockRow, rowIndex) in track" :key="rowIndex" class="block-row">
      <GridItem
        v-for="(blockItem, columnIndex) in blockRow"
        :key="`${rowIndex}-${columnIndex}`"
        :data-block-id="`${rowIndex}-${columnIndex}`"
        :item="blockItem"
        @grid-item:click="gridItemClicked(`${rowIndex}-${columnIndex}`)"
        @grid-item:right-click="gridItemRightClicked(`${rowIndex}-${columnIndex}`)"
        @barrier-marker:click="
          onBarrierMarkerClicked($event, `${rowIndex}-${columnIndex}`, blockItem)
        "
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GridItem from '@/components/GridItem.vue';
import { mapMutations, mapState } from 'vuex';
import { BLOCK_EMPTY } from '@/constants';
import { Block } from '@/types';

export default defineComponent({
  name: 'Track',
  components: {
    GridItem,
  },
  computed: {
    ...mapState(['track', 'currentBlock']),
  },
  methods: {
    ...mapMutations(['setTrackPosition', 'toggleBarrier']),
    gridItemClicked(position: string) {
      if (!this.currentBlock) return;
      this.setTrackPosition({ block: { ...this.currentBlock }, position });
    },
    gridItemRightClicked(position: string) {
      this.setTrackPosition({ block: { ...BLOCK_EMPTY }, position });
    },
    onBarrierMarkerClicked(side: string, position: string, blockItem: Block) {
      if (['up-down', 'left-right'].includes(blockItem.type)) {
        this.toggleBarrier({ position, side });
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.block-column {
  z-index: 2;
}
</style>
