<template>
  <div class="operatPerson">
    <h4>{{ title }}</h4>
    <div class="main_bottom">
      <tk-table :tableData="tableData" :tableKey="tableKey">
        <template slot="expand" slot-scope="scope">
          <el-button @click="onDetail(scope)">录入</el-button>
          <el-button @click="onDetail(scope)">查看</el-button>
        </template>
      </tk-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="limit"
        layout="total, -> ,sizes, -> , prev, pager, next"
        :total="count"
      />
    </div>
  </div>
</template>

<script>
import TkTable from '../../components/plugin/table/TkTable'
export default {
  name: 'operatPerson',
  data () {
    return {
      title: '药房查询功能',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: '',
        type: [],
        resource: ''
      },
      tableData: [],
      tableKey: [{
        name: '编号',
        value: 'a1'
      }, {
        name: '姓名',
        value: 'a2'
      }, {
        name: '备注',
        value: 'a3'
      }, {
        name: '操作',
        slot: true
      }],
      // 分页
      totalData: [],
      pageSizes: [5, 10, 15, 50, 100],
      currentPage: 1,
      limit: 5,
      count: 0
    }
  },
  created () {
    this.initData()
  },
  components: {
    TkTable
  },
  methods: {
    initData () {
      this.$http.get('../../../static/data/operatorAgency.json').then(res => {
        let data = res.data.result.rows
        this.count = data.length
        this.totalData = data
        this.tableData = data.slice(
          (this.currentPage - 1) * this.limit,
          this.limit + (this.currentPage - 1) * this.limit
        )
      }).catch(err => {
        console.log(err)
      })
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.tableData = this.totalData.slice(
        (val - 1) * this.limit,
        (val - 1) * this.limit + this.limit
      )
    },
    handleSizeChange (val) {
      this.limit = val
      this.initData()
    },
    onDetail (index, row) {
      console.log(row)
    }
  }
}
</script>

<style lang="less" scoped>
.operatPerson {
  height: 100%;
  h4 {
    height: 40px;
    line-height: 40px;
    background: #fff;
    padding-left: 20px;
    margin-bottom: 10px;
    font-size: 14px;
  }
  .main_bottom {
    background: #fff;
    height: calc(100% - 40px);
    padding: 15px;
    overflow-y: auto;
    .el-button {
      padding: 7px 26px
    }
    .el-form-item {
      margin-bottom: 6px
    }
    .el-table {
      margin:15px 0;
    }
  }
}
</style>
