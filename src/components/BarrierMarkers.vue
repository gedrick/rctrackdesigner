<template>
  <div class="barrier-markers">
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
  .horizontal {
    width: 20%;
    height: 100%;
  }

  .vertical {
    height: 20%;
    width: 100%;
  }

  .barrier {
    opacity: 0;
    background-color: rgba(red, 0.4);
    &:hover {
      opacity: 1;
    }
    &.right {
      right: 0;
    }
    &.top {
      top: 0;
    }
    &.bottom {
      bottom: 0;
    }
  }
}
</style>
