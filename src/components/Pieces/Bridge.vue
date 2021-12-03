<template>
  <div class="bridge">
    <div class="top">
      <div class="track-object road"></div>
      <div class="track-object stripe"></div>
    </div>
    <div class="bottom">
      <div class="track-object road"></div>
      <div class="track-object stripe"></div>
    </div>
  </div>
</template>

<style lang="scss">
.bridge {
  position: relative;
  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .bottom {
    z-index: 5;
    .road {
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

    .road {
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
}
</style>
