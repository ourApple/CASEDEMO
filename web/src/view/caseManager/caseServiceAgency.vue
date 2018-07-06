<template>
  <div class="caseManager">
    <h4>{{ title }}</h4>
    <div class="main_bottom">
      <el-form ref="form" :model="form" label-width="55px">
        <el-row>
          <el-col :span="3">
            <el-form-item label="姓名">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="手机号" label-width="70px">
              <el-input v-model="form.phone"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="预约号" label-width="70px">
              <el-input v-model="form.reserNumber"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4" style="text-align:right; margin-top:5px">
            <el-button type="warning">查询</el-button>
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
          :label="item.name"
          :width="item.width">
        </el-table-column>
        <el-table-column
          prop="a16"
          label="操作"
          width="160"
          align="center">
          <template slot-scope="scope">
            <el-button type="warning" size="mini" @click="onDetail(scope.$index, scope.row)">录入</el-button>
            <el-button type="success" size="mini" @click="onDetail(scope.$index, scope.row)">查看</el-button>
          </template>
          </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'operatPerson',
  data () {
    return {
      title: '服务管理-待办池',
      form: {
        name: '',
        region: '',
        reserNumber: '',
        phone: '',
        date1: '',
        date2: '',
        delivery: '',
        type: [],
        resource: ''
      },
      tableKey: [
        {
          name: '预约号',
          value: 'a1'
        }, {
          name: '姓名',
          value: 'a2'
        }, {
          name: '性别',
          value: 'a3'
        }, {
          name: '证件类型',
          value: 'a4'
        }, {
          name: '证件号码',
          value: 'a5',
          width: 140
        }, {
          name: '联系方式',
          value: 'a6',
          width: 120
        }, {
          name: '服务节点',
          value: 'a7'
        }, {
          name: '是否安排',
          value: 'a8'
        }, {
          name: '是否受此就诊',
          value: 'a9',
          width: 120
        }, {
          name: '下单时间',
          value: 'a10',
          width: 120
        }, {
          name: '计划就诊时间',
          value: 'a11',
          width: 120
        }, {
          name: '预约时间',
          value: 'a12',
          width: 120
        }, {
          name: '实际就诊时间',
          value: 'a13',
          width: 120
        }, {
          name: '住院时间',
          value: 'a14',
          width: 120
        }, {
          name: '出院时间',
          value: 'a15',
          width: 120
        }
      ],
      tableData: [
        {
          a1: '0000001',
          a2: '张三',
          a3: '男',
          a4: '身份证',
          a5: '23124516789233',
          a6: '13546788908',
          a7: '是',
          a8: '预约',
          a9: '否',
          a10: '20180102',
          a11: '20180102',
          a12: '20180102',
          a13: '20180102',
          a14: '20180106',
          a15: '20180108'
        }, {
          a1: '0000001',
          a2: '张三',
          a3: '男',
          a4: '身份证',
          a5: '23124516789233',
          a6: '13546788908',
          a7: '是',
          a8: '预约',
          a9: '否',
          a10: '20180102',
          a11: '20180102',
          a12: '20180102',
          a13: '20180102',
          a14: '20180106',
          a15: '20180108'
        }, {
          a1: '0000001',
          a2: '张三',
          a3: '男',
          a4: '身份证',
          a5: '23124516789233',
          a6: '13546788908',
          a7: '是',
          a8: '预约',
          a9: '否',
          a10: '20180102',
          a11: '20180102',
          a12: '20180102',
          a13: '20180102',
          a14: '20180106',
          a15: '20180108'
        }
      ]
    }
  },
  methods: {
    onDetail (index, row) {}
  }
}
</script>
<style lang="less" scoped>
.caseManager {
  height: 100%;
  overflow-y:auto;
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
.el-button {
      padding: 5px 15px
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
