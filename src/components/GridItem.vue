<template>
  <div :class="`${item.type}`" class="grid-item">
    <div v-if="item.type === 'default'" :class="item.type">
      <div class="track-object top-left-corner"></div>
      <div class="track-object right-piece"></div>
      <div class="track-object bottom-piece"></div>
    </div>
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
  },
});
</script>

<style lang="scss" scoped>
.grid-item {
  aspect-ratio: 1 / 1;
  background-color: $medblue;
  color: $white;
  width: 7vw;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.35s all ease-in-out;
  user-select: none;
  opacity: 0.6;
  cursor: pointer;
  position: relative;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    transition: none;
    opacity: 1;
  }

  & > div {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .track-object {
    position: absolute;
  }

  .default {
    // @include stripes;
  }

  .blocked {
    // @include stripes;
  }
}
</style>
