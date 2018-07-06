<template>
  <el-table :data="tableData" border>
    <el-table-column v-for="(item,key) in tableKey" v-if="!item.slot"
      :key="key"
      :prop="item.value"
      :label="item.name">
    </el-table-column>
    <el-table-column v-for="(item,key) in tableKey"  v-if="item.slot"
      :key="key"
      :prop="item.value"
      :label="item.name">
      <template slot-scope="scope">
        <slot name="expand"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default{
  name: 'tkTable',
  props: ['tableData', 'tableKey'],
  data () {
    return {}
  }
}
</script>
