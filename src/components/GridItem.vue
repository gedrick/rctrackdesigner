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
    <div v-if="item.type === 'left-up'" :class="`${item.type}`">
      <!-- <CurvedTurn /> move into own component and rotate for re-usability -->
      <div class="track-object stripes"></div>
      <div class="track-object circle"></div>
      <div class="track-object left-rect"></div>
      <div class="track-object right-rect"></div>
      <div class="track-object curve"></div>
    </div>
    <div v-if="item.type === 'stripes'" :class="`${item.type}`">
      <div class="track-object stripes"></div>
    </div>

    <div v-for="barrier in item.barriers" :key="barrier" :class="barrier" class="barrier"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GridItem',
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
});
</script>

<style lang="scss" scoped>
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

  .up-down {
  }

  .left-right {
    .road {
      transform: rotate(90deg);
    }
    .stripe {
      left: 43%;
      transform: rotate(90deg);
      top: 7%;
    }
  }

  .left-up {
    .stripes {
      @include stripes;
      width: 100%;
      height: 100%;
    }
    .circle {
      border-radius: 50%;
      background-color: $medblue;
      width: 100%;
      height: 100%;
      bottom: 5%;
      right: 5%;
    }
    .left-rect {
      background-color: $medblue;
      width: 50%;
      height: 95%;
      top: 0;
      left: 0;
    }
    .right-rect {
      background-color: $medblue;
      width: 50%;
      height: 95%;
      top: -50%;
      right: 5%;
    }
    .curve {
      background-color: transparent;
      border-radius: 50%;
      width: 100%;
      height: 100%;
      top: -25%;
      left: -25%;
      margin: -34px;
      border-bottom: 5px solid $white;
      border-right: 5px solid $white;
      border-style: dashed;
    }
  }

  .stripes {
    @include stripes;
  }

  .default {
    // @include stripes;
  }

  .blocked {
    // @include stripes;
  }

  .barrier {
    position: absolute;
    background-color: $red;
    @include stripes;
    &.left {
      height: 100%;
      width: 5%;
      top: 0;
      left: 0;
    }
    &.right {
      height: 100%;
      width: 5%;
      right: 0;
    }
    &.top {
      width: 100%;
      height: 5%;
      top: 0;
      left: 0;
    }
    &.bottom {
      width: 100%;
      height: 5%;
      bottom: 0;
      left: 0;
    }
  }
}
</style>
