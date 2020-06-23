<template>
  <div class="table">
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        v-for="item in tableOption"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
      >
      </el-table-column>
      <slot></slot>
    </el-table>

  </div>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      default: () => {
        return [];
      }
    },
    tableOption: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>
