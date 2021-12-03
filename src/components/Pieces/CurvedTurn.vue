<template>
  <div class="curved-turn">
    <div class="track-object stripes"></div>
    <div class="track-object circle"></div>
    <div class="track-object left-rect"></div>
    <div class="track-object right-rect"></div>
    <div class="track-object curve"></div>
  </div>
</template>

<style lang="scss">
.stripes {
  @include stripes;
  width: 100%;
  height: 100%;
}
.circle {
  border-radius: 50%;
  background-color: $medblue;
  width: 100%;
  height: 100%;
  bottom: 5%;
  right: 5%;
}
.left-rect {
  background-color: $medblue;
  width: 50%;
  height: 95%;
  top: 0;
  left: 0;
}
.right-rect {
  background-color: $medblue;
  width: 50%;
  height: 95%;
  top: -50%;
  right: 5%;
}
.curve {
  background-color: transparent;
  border-radius: 37%;
  width: 100%;
  height: 100%;
  top: -25%;
  left: -25%;
  margin: -34px;
  border-bottom: 5px solid $white;
  border-right: 5px solid $white;
  border-style: dashed;
}
</style>
