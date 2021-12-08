<template>
  <div class="barrier-markers">
    <div
      @click.stop="$emit('barrier-marker:click', 'top-left')"
      class="diagonal barrier top-left"
    ></div>
    <div
      @click.stop="$emit('barrier-marker:click', 'top-right')"
      class="diagonal barrier top-right"
    ></div>
    <div @click.stop="$emit('barrier-marker:click', 'left')" class="horizontal barrier left"></div>
    <div
      @click.stop="$emit('barrier-marker:click', 'right')"
      class="horizontal barrier right"
    ></div>
    <div @click.stop="$emit('barrier-marker:click', 'top')" class="vertical barrier top"></div>
    <div
      @click.stop="$emit('barrier-marker:click', 'bottom')"
      class="vertical barrier bottom"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.barrier-markers {
  & > div {
    position: absolute;
  }

  .diagonal {
    height: 10%;
    width: $blockWidthDiagonal;
  }

  .horizontal {
    width: 10%;
    height: 80%;
  }

  .vertical {
    height: 10%;
    width: 80%;
  }

  .barrier {
    opacity: 0;
    background-color: rgba(red, 0.4);
    &:hover {
      opacity: 1;
    }
    &.top-left {
      transform-origin: left;
      transform: rotate(45deg);
      left: 1%;
      top: -4%;
    }
    &.top-right {
      transform-origin: right;
      transform: rotate(-45deg);
      right: 0%;
      top: -5%;
    }
    &.left {
      top: 10%;
    }
    &.right {
      top: 10%;
      right: 0;
    }
    &.top {
      top: 0;
      left: 10%;
    }
    &.bottom {
      bottom: 0;
      left: 10%;
    }
  }
}
</style>
