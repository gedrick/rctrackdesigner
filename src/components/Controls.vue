<template>
  <div class="controls">
    <button @click="save">Save Changes</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';

export default defineComponent({
  name: 'Controls',
  computed: {
    ...mapState(['track']),
  },
  methods: {
    save() {
      // return track.map((row, rowIndex) => {
      // const rowArr: string[] = [];
      // for (let column in row) {
      // rowArr.push(`${rowIndex},${co})
      // }
      // return row.map((column, colIndex) => {
      //   return;
      // });
      // });
    },
  },
});
</script>

<style lang="scss" scoped>
.controls {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
}
</style>
