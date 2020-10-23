<template>
  <div class="tree-module">
    <el-input
      placeholder="输入关键字进行过滤"
      v-model="filterText">
    </el-input>
    <el-tree
      ref="tree"
      class="filter-tree"
      node-key="id"
      default-expand-all
      draggable
      :data="treeData"
      :filter-node-method="filterNode"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterText: ''
    }
  },
  props: {
    treeData: Array
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>