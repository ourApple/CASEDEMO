<template>
  <div class="operatPerson">
    <h4>{{ title }}</h4>
    <div class="main_bottom">
      <my-table :tableData="tableData"
        :tableLable="tableLable"
        :tableOption="tableOption"
        @handleButton="handleButton"
        :isPagination="isPagination"
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        :total="total"
        @sizeChange="sizeChange"
        @currentChange="currentChange">
      </my-table>
    </div>
  </div>
</template>

<script>
import myTable from '../../components/plugin/table/myTable'
export default {
  data () {
    return {
      title: '药房代办功能',
      pageSizes: [5, 10, 15, 30, 50, 100],
      pageSize: 5,
      totalData: [],
      tableData: [],
      total: 0,
      currentPage: 1,
      isPagination: true,
      listen: '1',
      tableLable: [
        {name: '序号', value: 'a1'},
        {name: '姓名', value: 'a2'},
        {name: '性别', value: 'a3'},
        {name: '联系方式', value: 'a4'},
        {name: '服务类型', value: 'a5'}
      ],
      tableOption: {
        label: '操作',
        options: [
          {label: '录入', type: 'warning', methods: 'editRecharge'},
          {label: '查看', type: 'success', methods: 'deleteRecharge'}
        ]
      }
    }
  },
  components: {
    myTable
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      this.$http.get('../../../static/data/operatorAgency.json').then(res => {
        let data = res.data.result.rows
        this.total = data.length
        this.tableData = data
        this.totalData = data
        this.tableData = data.slice(
          (this.currentPage - 1) * this.pageSize,
          this.pageSize + (this.currentPage - 1) * this.pageSize
        )
      }).catch(err => {
        console.log(err)
      })
    },
    handleButton (val) {
      if (val.methods === 'editRecharge') {
        this.editRecharge(val.row)
      } else {
        this.deleteRecharge(val.row)
      }
    },
    editRecharge (row) {
      // console.log(row)
      this.listen = 2
    },
    deleteRecharge (row) {
      console.log(row)
    },
    sizeChange (val) {
      this.pageSize = val
      this.initData()
    },
    currentChange (val) {
      this.currentPage = val
      this.tableData = this.totalData.slice(
        (val - 1) * this.pageSize,
        (val - 1) * this.pageSize + this.pageSize
      )
    }
  },
  // 监听器
  watch: {
    listen: function (newVal, oldVal) {
      console.log('new', newVal)
      console.log('old', oldVal)
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
