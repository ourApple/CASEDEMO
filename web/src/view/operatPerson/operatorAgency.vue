<template>
  <div class="operatPerson">
    <h4>{{ title }}</h4>
    <div class="main_bottom">
      <el-form ref="form" :model="form" label-width="55px">
        <el-row>
          <el-col :span="3">
            <el-form-item label="姓名">
              <el-input v-model="form.delivery"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="手机号" label-width="70px">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="类型">
              <el-select v-model="form.type">
                <el-option label="类型1" value="shanghai"></el-option>
                <el-option label="类型2" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="状态">
              <el-select v-model="form.region">
                <el-option label="全部" value="all"></el-option>
                <el-option label="单个" value="single"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="首次服务" label-width="88px">
              <el-select v-model="form.resource">
                <el-option label="是" value="yes"></el-option>
                <el-option label="否" value="no"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4" style="text-align:right; margin-top:5px">
            <el-button type="warning" @click="aa">查询</el-button>
            <el-button type="success">导出</el-button>
          </el-col>
        </el-row>
      </el-form>
        <el-table
          :data="tableData"
          stripe
          border
          style="width: 100%">
          <el-table-column v-for="(item,key) in tableKey"
            :key="key"
            :prop="item.value"
            :label="item.name">
          </el-table-column>
          <el-table-column
            prop="a6"
            label="操作"
            align="center">
            <template slot-scope="scope">
              <el-button type="success" size="mini" @click="onDetail(scope.$index, scope.row)">查看</el-button>
            </template>
          </el-table-column>
      </el-table>
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
import { getDrillhole, getSearch } from '../../api/api'
export default {
  name: 'operatPerson',
  data () {
    return {
      title: '服务管理-待办池',
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
    this.aa()
    this.bb()
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
    async aa () {
      await getDrillhole().then(res => {
        console.log(res)
      })
    },
    async bb () {
      let c = [{'code': 'string'}]
      await getSearch(c).then(res => {
        console.log(res)
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
