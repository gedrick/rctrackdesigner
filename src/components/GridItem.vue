<template>
  <div class="grid-item" :class="item.type">{{ item.type }}</div>
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
  background-color: grey;
  width: 100px;
  height: 100px;
}
</style>
