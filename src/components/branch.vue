<template>
  <div id="branch">
    <div class="selelcted-list">
      <div>
        <el-tag 
          v-for="item in selected"
          :key="item.label"
        >{{ item.label }}</el-tag>
      </div>
    </div>
    <div>
      <el-input
        placeholder="输入关键字进行过滤"
        v-model="filterText">
      </el-input>
      <el-tree
        ref="tree"
        class="filter-tree"
        node-key="id"
        show-checkbox
        default-expand-all
        :data="tredData"
        :filter-node-method="filterNode"
        :check-on-click-node="true"
        :default-checked-keys="defaultData"
        @check-change="handleChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tredData: Array,
    selected: Array
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
    },
    handleChange() {
      const nowSelectedNode = this.$refs.tree.getCheckedNodes();
      this.$emit('handle-selected', nowSelectedNode);
      this.defaultData = nowSelectedNode.map(item => item.id);
    }
  },
  data() {
    return {
      defaultData: [],
      filterText: ''
    };
  }
}
</script>
<style lang="scss" scoped>
.selelcted-list {
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  padding: 2px;
  overflow: hidden;
  overflow-x: auto;
  border: 1px solid #333;
  border-radius: 4px;
  text-align: left;

  > div {
    max-width: 100vw;
  }

  /deep/ .el-tag {
    height: 44px;
    line-height: 42px;
    margin-right: 2px;
  }
}
</style>
