<template>
  <div :class="`${item.type}`" class="grid-item">
    {{ item.type }}
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
  background-color: #457b9d;
  color: #f1faee;
  width: 6vw;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.35s all ease-in-out;
  user-select: none;
  opacity: 0.6;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
}
</style>
