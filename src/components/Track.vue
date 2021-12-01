<template>
  <div class="block-column">
    <div v-for="(blockRow, rowIndex) in blocks" :key="rowIndex" class="block-row">
      <GridItem
        v-for="(blockItem, columnIndex) in blockRow"
        :key="`${rowIndex}-${columnIndex}`"
        :data-block-id="`${rowIndex}-${columnIndex}`"
        :item="blockItem"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GridItem from '@/components/GridItem.vue';

export default defineComponent({
  name: 'Track',
  props: {
    blocks: {
      type: Object,
      required: true,
    },
  },
  components: {
    GridItem,
  },
});
</script>
