<template>
  <div class="barrier" :class="side" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Barrier',
  props: {
    side: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
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
  &.top-left {
    width: $blockWidthDiagonal;
    height: 5%;
    top: 0;
    left: 0;
    transform-origin: left;
    transform: rotate(45deg);
  }
  &.top-right {
    width: $blockWidthDiagonal;
    height: 5%;
    top: 0;
    right: 0;
    transform-origin: right;
    transform: rotate(-45deg);
  }
}
</style>
