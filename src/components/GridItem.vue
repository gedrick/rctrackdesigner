<template>
  <div
    :class="`${item.type} ${animationType} ${item.type !== 'empty' ? 'sticky' : ''}`"
    class="grid-item"
    @click="$emit('grid-item-clicked')"
  >
    <div v-if="item.type === 'default'" :class="`${item.type}`">
      <div class="track-object top-left-corner"></div>
      <div class="track-object right-piece"></div>
      <div class="track-object bottom-piece"></div>
    </div>
    <div v-if="item.type === 'up-down'" :class="`${item.type}`">
      <div class="track-object road"></div>
      <div class="track-object stripe"></div>
    </div>
    <div v-if="item.type === 'left-right'" :class="`${item.type}`">
      <div class="track-object road"></div>
      <div class="track-object stripe"></div>
    </div>
    <div v-if="item.type === 'stripes'" :class="`${item.type}`">
      <div class="track-object stripes"></div>
    </div>
    <Bridge v-if="bridges.includes(item.type)" :class="item.type" />
    <CurvedTurn v-if="curves.includes(item.type)" :class="item.type" />
    <Barrier v-for="barrier in item.barriers" :key="barrier" :side="barrier" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CurvedTurn from '@/components/Pieces/CurvedTurn.vue';
import Bridge from '@/components/Pieces/Bridge.vue';
import Barrier from '@/components/Pieces/Barrier.vue';

export default defineComponent({
  name: 'GridItem',
  components: {
    CurvedTurn,
    Bridge,
    Barrier,
  },
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
      required: true,
    },
    animationType: {
      type: String,
      default: 'fade',
    },
  },
  data() {
    return {
      curves: [
        'left-up',
        'left-down',
        'right-up',
        'right-down',
        'down-left',
        'down-right',
        'open-road',
      ],
      bridges: ['bridge-left-right', 'bridge-up-down'],
    };
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

  .left-right {
    .road {
      transform: rotate(90deg);
    }
    .stripe {
      left: 47%;
      transform: rotate(90deg);
      top: 7%;
    }
  }

  .stripes {
    @include stripes;
  }

  // Curves
  .left-down {
    transform: rotate(270deg);
  }
  .right-up {
    transform: rotate(90deg);
  }
  .right-down {
    transform: rotate(180deg);
  }

  // Bridge
  .bridge-left-right {
    transform: rotate(90deg);
  }
}
</style>
