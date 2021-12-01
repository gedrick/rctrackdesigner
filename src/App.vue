<template>
  <div class="container">
    <Settings />
    <Track :blocks="blocks" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Settings from '@/components/Settings.vue';
import Track from '@/components/Track.vue';
import { mapState } from 'vuex';

type Block = {
  name: string;
  type: string;
};

export default defineComponent({
  name: 'App',
  components: {
    Settings,
    Track,
  },
  data() {
    return {
      blocks: [] as Block[][],
      sampleRow: [
        { type: 'default' },
        { type: 'leftToRight' },
        { type: 'leftToRight' },
        { type: 'leftToUp' },
      ] as Block[],
    };
  },
  computed: {
    ...mapState(['dimension1', 'dimension2']),
    width(): number {
      return Math.max(this.dimension1, this.dimension2);
    },
    height(): number {
      return Math.min(this.dimension1, this.dimension2);
    },
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
body {
  overflow: hidden;
  font-family: $baseFont;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $darkblue;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
</style>
