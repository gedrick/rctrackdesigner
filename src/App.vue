<template>
  <div class="grid-container">
    <div class="grid-row" v-for="(blockRow, rowIndex) in blocks" :key="rowIndex">
      <GridItem
        v-for="(blockItem, columnIndex) in blockRow"
        :key="`${rowIndex}-${columnIndex}`"
        :item="blockItem"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GridItem from './components/GridItem.vue';

export default defineComponent({
  name: 'App',
  components: {
    GridItem,
  },
  data() {
    return {
      width: 20,
      height: 20,
      blocks: [] as { type: string }[],
      sampleRow: [
        { type: 'default' },
        { type: 'leftToRight' },
        { type: 'leftToRight' },
        { type: 'leftToUp' },
      ],
    };
  },
  mounted() {
    // Set up default blocks
    this.blocks = [...this.sampleRow, ...this.sampleRow, ...this.sampleRow, ...this.sampleRow];
  },
});
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.grid-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.grid-row {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
}
</style>
