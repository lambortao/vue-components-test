<template>
  <div id="app">
    <branchList
      :tredData="branchData"
      :selected="branchSelected"
      @handle-selected="branchHandleSelected"
    />
  </div>
</template>

<script>
import branchList from '@/components/branch.vue';
export default {
  components: {
    branchList
  },
  name: 'App',
  data() {
    return {
      branchSelected: [],
      branchData: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
    };
  },
  methods: {
    branchHandleSelected(e) {
      this.branchSelected = e;
    }
  }
}
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
