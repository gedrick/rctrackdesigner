<template>
  <div class="settings">
    <div class="option">
      <div class="arrow up" @click="clickDimension1(1)"></div>
      <div class="dimension">{{ dimension1 }}</div>
      <div class="arrow down" @click="clickDimension1(-1)"></div>
    </div>
    <div class="option">
      <div class="arrow up" @click="clickDimension2(1)"></div>
      <div class="dimension">{{ dimension2 }}</div>
      <div class="arrow down" @click="clickDimension2(-1)"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default defineComponent({
  computed: {
    ...mapState(['dimension1', 'dimension2']),
  },
  methods: {
    ...mapMutations(['setDimension1', 'setDimension2']),
    ...mapActions(['initialize']),
    clickDimension1(change: number) {
      if (this.dimension1 === 1 && change === -1) return;
      this.setDimension1(this.dimension1 + change);
      this.initialize();
    },
    clickDimension2(change: number) {
      if (this.dimension2 === 1 && change === -1) return;
      this.setDimension2(this.dimension2 + change);
      this.initialize();
    },
  },
});
</script>

<style lang="scss" scoped>
.settings {
  z-index: 5;
  position: absolute;
  bottom: 2%;
  right: 2%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.option {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:first-of-type {
    margin-right: 50px;
  }

  opacity: 0.4;
  transition: 0.3s all ease-in-out;

  &:hover {
    opacity: 1;
  }
}

.dimension {
  color: $white;
  font-family: $baseFont;
  font-size: 23px;
  font-weight: bold;
}

.arrow {
  @include arrow;

  &.up {
    transform: rotate(-135deg);
  }
  &.down {
    transform: rotate(45deg);
  }
}
</style>
