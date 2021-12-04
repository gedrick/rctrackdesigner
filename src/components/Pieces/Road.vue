<template>
  <div class="road">
    <div class="track-object roadway"></div>
    <div class="track-object stripe"></div>
  </div>
</template>

<style lang="scss" scoped>
.road {
  .roadway {
    background-color: $medblue;
    width: 90%;
    height: 100%;
    left: 5%;
  }

  .stripe {
    border-left: $borderWidth dashed $white;
    height: 100%;
    width: 10%;
    left: 50%;
  }

  // Rotate for other directions.
  &.left-right {
    .roadway {
      transform: rotate(90deg);
    }
    .stripe {
      left: 40%;
      transform: rotate(90deg);
      top: 7%;
    }
  }
}
</style>
