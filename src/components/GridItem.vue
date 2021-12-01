<template>
  <div :class="`${item.type}`" class="grid-item">
    <div v-if="item.type === 'default'" class="default">
      <div class="corner-piece"></div>
      <div class="bottom-pipe"></div>
    </div>
    <!-- {{ item.type }} -->
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
  position: relative;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }

  & > div {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .default {
    // background-color: red;
    position: relative;

    .corner-piece {
      position: absolute;
      background-color: white;
      transform: rotate(45deg);
      border-bottom: 2px solid black;
      border-top: 2px solid black;
      width: 4%;
      height: 80%;
      top: -2%;
      left: 34%;
    }

    .bottom-pipe {
      position: absolute;
      background-color: white;
      border-bottom: 1px solid black;
      border-top: 1px solid black;
      width: 4%;
      height: 28%;
      left: 5%;
      bottom: 1%;
    }
  }

  .top-left-corner {
  }
}
</style>
