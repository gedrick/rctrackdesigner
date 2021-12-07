<template>
  <div
    :class="`${item.type} ${animationType} ${item.type !== 'empty' ? 'sticky' : ''}`"
    class="grid-item"
    @click="$emit('grid-item:click')"
    @contextmenu.prevent="$emit('grid-item:right-click')"
  >
    <Space v-if="item.type === 'space'" :class="item.type" />
    <Stripes v-if="item.type === 'stripes'" :class="item.type" />
    <Road v-if="roads.includes(item.type)" :class="item.type" />
    <Bridge v-if="bridges.includes(item.type)" :class="item.type" />
    <CurvedTurn v-if="curves.includes(item.type)" :class="item.type" />
    <Barrier v-for="barrier in item.barriers" :key="barrier" :side="barrier" />
    <BarrierMarkers
      v-if="showBarriers && barriersAllowed"
      @barrier-marker:click="$emit('barrier-marker:click', $event)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Space from '@/components/Pieces/Space.vue';
import Stripes from '@/components/Pieces/Stripes.vue';
import Road from '@/components/Pieces/Road.vue';
import CurvedTurn from '@/components/Pieces/CurvedTurn.vue';
import Bridge from '@/components/Pieces/Bridge.vue';
import Barrier from '@/components/Pieces/Barrier.vue';
import BarrierMarkers from '@/components/BarrierMarkers.vue';
import { TYPES_WITH_BARRIERS } from '@/constants';

export default defineComponent({
  name: 'GridItem',
  components: {
    Space,
    Stripes,
    Road,
    CurvedTurn,
    Bridge,
    Barrier,
    BarrierMarkers,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    animationType: {
      type: String,
      default: 'fade',
    },
    showBarriers: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      roads: ['up-down', 'left-right'] as string[],
      curves: [
        'left-up',
        'left-down',
        'right-up',
        'right-down',
        'down-left',
        'down-right',
        'open-road',
      ] as string[],
      bridges: ['bridge-up-down', 'bridge-left-right'] as string[],
    };
  },
  computed: {
    barriersAllowed(): boolean {
      return TYPES_WITH_BARRIERS.includes(this.item.type);
    },
  },
  methods: {
    onDragStart(e: Event) {
      console.log('onDragStart', e);
    },
    onDragEnd(e: Event) {
      console.log('onDragEnd', e);
    },
    onDragEnter(e: Event) {
      console.log('onDragEnter', e);
    },
    onDrop(e: Event) {
      console.log('onDrop', e);
    },
  },
});
</script>

<style lang="scss">
.grid-item {
  overflow: hidden;
  aspect-ratio: 1 / 1;
  color: $white;
  width: $blockSize;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: $animationTime all ease-in-out;
  user-select: none;
  cursor: pointer;
  position: relative;
  background-color: $medblue;

  &.fade:not(.sticky) {
    transition: none;
    opacity: 0.6;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 1;
    }
  }

  &.grow {
    opacity: 1;
    border: 1px solid $darkblue;

    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transition: none;
      opacity: 1;
    }
  }

  & > div:not(.barrier) {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .track-object {
    position: absolute;
  }
}
</style>
