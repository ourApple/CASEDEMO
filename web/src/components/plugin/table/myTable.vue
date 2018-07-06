<template>
  <div class="operatPerson">
    <el-table :data="tableData" empty-text="暂无数据" border stripe>
      <el-table-column v-for="(item, index) in tableLable"
        :key="index"
        :label="item.name"
        :prop="item.value"
      >
      </el-table-column>
      <el-table-column
        :label="tableOption.label"
        align="center">
        <template slot-scope="scope">
          <el-button v-for="(item, index) in tableOption.options"
          :key="index"
          :type="item.type"
          size="mini"
          @click="handleButton(item.methods, scope.row)">
            {{ item.label }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="isPagination"
      :isPagination="isPagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout="total, -> ,sizes, -> , prev, pager, next"
      :total="total"
    />
  </div>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      default: () => {}
    },
    tableLable: {
      type: Array,
      default: () => {}
    },
    tableOption: {
      type: Object,
      default: () => {}
    },
    currentPage: {
      type: Number,
      default: () => {}
    },
    pageSizes: {
      type: Array,
      default: () => {}
    },
    pageSize: {
      type: Number,
      default: () => {}
    },
    total: {
      type: Number,
      default: () => {}
    },
    isPagination: {
      type: Boolean,
      default: () => {}
    }
  },
  data () {
    return {}
  },
  created () {},
  methods: {
    handleButton (methods, row) {
      this.$emit('handleButton', {'methods': methods, 'row': row})
    },
    handleSizeChange (val) {
      this.$emit('sizeChange', val)
    },
    handleCurrentChange (val) {
      this.$emit('currentChange', val)
    }
  }
}
</script>

<style lang="less" scoped>
.el-pagination {
  margin: 5px 0
}
</style>
