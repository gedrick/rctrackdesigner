<template>
  <div class="container">
    <div class="block-column">
      <div v-for="(blockRow, rowIndex) in blocks" :key="rowIndex" class="block-row">
        <GridItem
          v-for="(blockItem, columnIndex) in blockRow"
          :class="`w-1/${blockRow.length} h-1/${blockRow.length} w-auto`"
          :key="`${rowIndex}-${columnIndex}`"
          :item="blockItem"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GridItem from './components/GridItem.vue';

declare interface Block {
  type: string;
}

export default defineComponent({
  name: 'App',
  components: {
    GridItem,
  },
  computed: {
    width(): number {
      return Math.max(this.side1, this.side2);
    },
    height(): number {
      return Math.min(this.side1, this.side2);
    },
  },
  data() {
    return {
      side1: 6 as number,
      side2: 10 as number,
      blocks: [] as Block[][],
      sampleRow: [
        { type: 'default' },
        { type: 'leftToRight' },
        { type: 'leftToRight' },
        { type: 'leftToUp' },
      ] as Block[],
    };
  },
  mounted() {
    // Set up default blocks
    this.generateBlocks();
  },
  methods: {
    generateBlocks() {
      const row = Array(this.width).fill({ type: 'default' });
      this.blocks = Array(this.height).fill(row);
    },
  },
});
</script>

<style lang="scss">
$blockSpace: 5px;
body {
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #1d3557;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  // max-width: 90vw;
  // max-height: 90vh;
}

.block-column {
  display: flex;
  flex-direction: column;
  gap: $blockSpace;
}

.block-row {
  display: flex;
  flex-direction: row;
  gap: $blockSpace;
}

// lightblue: '#457b9d',
//     darkblue: '#1d3557',
//     white: '#f1faee',
</style>
