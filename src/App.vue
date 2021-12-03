<template>
  <div class="app">
    <Settings />
    <Selector />
    <Track />
    <Controls />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Selector from '@/components/Selector.vue';
import Settings from '@/components/Settings.vue';
import Track from '@/components/Track.vue';
import Controls from '@/components/Controls.vue';
import { mapActions, mapState } from 'vuex';
import { Block } from '@/types';

export default defineComponent({
  name: 'App',
  components: {
    Selector,
    Settings,
    Track,
    Controls,
  },
  data() {
    return {
      blocks: [] as Block[][],
      sampleRow: [
        { type: 'open' },
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
    this.initialize();
  },
  methods: {
    ...mapActions(['initialize']),
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

.app {
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
