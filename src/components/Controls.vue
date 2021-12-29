<template>
  <div class="controls">
    <button @click="save">Save Changes</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';
import { Block } from '@/types';
import { BARRIER_MAPPINGS, SAVE_ROW_SEPARATOR, SAVE_BARRIER_SEPARATOR } from '@/constants/index';

export default defineComponent({
  name: 'Controls',
  computed: {
    ...mapState(['track']),
  },
  methods: {
    save() {
      const SAVE_ROW_SEPARATOR = '*';
      const SAVE_BARRIER_SEPARATOR = '|';
      const saveStr: string[][] = [];
      let rowStr: string[];
      this.track.forEach((row: [], _rowIndex: number) => {
        rowStr = row.map(
          (rowItem: Block, _colIndex: number) =>
            `${rowItem.id}${
              rowItem.barriers
                ? `+${rowItem.barriers
                    .map((barrier) => BARRIER_MAPPINGS[barrier])
                    .join(SAVE_BARRIER_SEPARATOR)}`
                : ''
            }`,
        );
        // console.log(rowStr.join(SAVE_ROW_SEPARATOR));
        saveStr.push(rowStr);
      });

      console.log(saveStr.join(SAVE_ROW_SEPARATOR));
    },
    load(data: string) {
      const rows = data.split(SAVE_ROW_SEPARATOR);
      console.log(rows);
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
