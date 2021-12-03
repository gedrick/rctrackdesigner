<template>
  <div class="block-column">
    <div v-for="(blockRow, rowIndex) in track" :key="rowIndex" class="block-row">
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
import { mapState } from 'vuex';

export default defineComponent({
  name: 'Track',
  components: {
    GridItem,
  },
  computed: {
    ...mapState(['track']),
  },
});
</script>

<style lang="scss" scoped>
.block-column {
  z-index: 2;
}
</style>
