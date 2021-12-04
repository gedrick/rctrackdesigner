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
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GridItem from '@/components/GridItem.vue';
import { mapMutations, mapState } from 'vuex';
import { BLOCK_EMPTY } from '@/constants';

export default defineComponent({
  name: 'Track',
  components: {
    GridItem,
  },
  computed: {
    ...mapState(['track', 'currentBlock']),
  },
  methods: {
    ...mapMutations(['setTrackPosition']),
    gridItemClicked(position: string) {
      if (!this.currentBlock) return;
      this.setTrackPosition({ block: this.currentBlock, position });
    },
    gridItemRightClicked(position: string) {
      this.setTrackPosition({ block: BLOCK_EMPTY, position });
    },
  },
});
</script>

<style lang="scss" scoped>
.block-column {
  z-index: 2;
}
</style>
