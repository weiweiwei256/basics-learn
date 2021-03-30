<template>
  <div id='tree'>
    <el-tree :data="data"
             node-key="id"
             ref="tree"
             :expand-on-click-node="false"
             highlight-current
             :default-expanded-keys="treeExpandData"
             :props="defaultProps">
    </el-tree>

    <div class="buttons">
      <el-button @click="test">test</el-button>
      <el-button @click="setCurrentKey">设置选中</el-button>
      <el-button @click="setChecked">setChecked</el-button>
      <el-button @click="getCurrentKey">获取选中</el-button>
      <el-button @click="getCheckedNodes">通过 node 获取</el-button>
      <el-button @click="getCheckedKeys">通过 key 获取</el-button>
      <el-button @click="setCheckedNodes">通过 node 设置</el-button>
      <el-button @click="setCheckedKeys">通过 key 设置</el-button>
      <el-button @click="resetChecked">清空</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tree',
  data() {
    return {
      treeExpandData: [],
      data: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1'
                },
                {
                  id: 10,
                  label: '三级 1-1-2'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1'
            },
            {
              id: 6,
              label: '二级 2-2'
            }
          ]
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1'
            },
            {
              id: 8,
              label: '二级 3-2'
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    test() {
      this.treeExpandData.push(1)
      this.$refs.tree.setCurrentKey(1)
      // console.dir(this.$refs.tree.$el.firstChild.firstChild)
      // this.$refs.tree.$el.firstChild.firstChild.firstChild.click()
    },
    setCurrentKey() {
      this.$refs.tree.setCurrentKey(1)
    },
    setChecked() {
      this.$refs.tree.setChecked(1, false, false)
    },
    getCurrentKey() {
      console.log('this.$refs.tree', this.$refs.tree)
      const current = this.$refs.tree.getCurrentKey()
      console.log('current', current)
    },
    getCheckedNodes() {
      console.log(this.$refs.tree.getCheckedNodes())
    },
    getCheckedKeys() {
      console.log(this.$refs.tree.getCheckedKeys())
    },
    setCheckedNodes() {
      this.$refs.tree.setCheckedNodes([
        {
          id: 5,
          label: '二级 2-1'
        },
        {
          id: 9,
          label: '三级 1-1-1'
        }
      ])
    },
    setCheckedKeys() {
      this.$refs.tree.setCheckedKeys([3])
    },
    resetChecked() {
      this.$refs.tree.setCheckedKeys([])
    }
  },
  mounted: function() {
    console.log('demo mounted')
  }
}
</script>

<style>
</style>
