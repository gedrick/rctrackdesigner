<template>
  <div class="bridge">
    <div class="top">
      <div class="track-object roadway"></div>
      <div class="track-object stripe"></div>
    </div>
    <div class="bottom">
      <div class="track-object roadway"></div>
      <div class="track-object stripe"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bridge {
  position: relative;

  .top,
  .bottom {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .stripe {
    border-left: $borderWidth dashed $white;
    height: 100%;
    width: 10%;
    left: 50%;
  }

  .bottom {
    z-index: 5;
    .roadway {
      transform: rotate(90deg);
    }
    .stripe {
      left: 47%;
      transform: rotate(90deg);
      top: 7%;
    }
  }

  .top {
    z-index: 7;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;

    .roadway {
      box-shadow: 0px 0px 14px 5px #000000;
      border-left: 2px solid $darkblue;
      border-right: 2px solid $darkblue;
      top: 0;
      left: 5%;
      width: 80%;
      height: 100%;
      left: 10%;
    }
  }

  // Rotate for other directions.
  &.bridge-left-right {
    transform: rotate(90deg);
  }
}
</style>
