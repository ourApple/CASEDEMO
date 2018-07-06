<template>
  <div class="operatPerson">
    <h4>{{ title }}</h4>
    <div class="main_bottom">
      <el-form ref="form" :model="form" label-width="55px">
        <el-row>
          <el-col :span="4">
            <el-form-item label="医院编码" label-width="80px">
              <el-input v-model="form.maintain"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="医院全称" label-width="80px">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="主治医师" label-width="80px">
              <el-input v-model="form.doctor"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11" style="margin-top: 5px" :offset="1">
            <el-button type="warning">查询</el-button>
            <el-button type="warning">新增</el-button>
            <el-button type="warning">修改</el-button>
            <el-button type="warning">删除</el-button>
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
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'operatPerson',
  data () {
    return {
      title: '医院信息维护',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: '',
        type: [],
        resource: ''
      },
      tableKey: [
        {
          name: '序号',
          value: 'a1'
        }, {
          name: '省',
          value: 'a2'
        }, {
          name: '市',
          value: 'a3'
        }, {
          name: '医院编号',
          value: 'a4'
        }, {
          name: '医院名称',
          value: 'a5'
        }, {
          name: '医院级别',
          value: 'a6'
        }, {
          name: '医院简介(主治)',
          value: 'a7',
          width: 120
        }, {
          name: '主治医师',
          value: 'a8'
        }, {
          name: '医院职称',
          value: 'a9'
        }, {
          name: '医生简介(主治)',
          width: 120,
          value: 'a10'
        }, {
          name: '个案管理师',
          value: 'a11',
          width: 120
        }, {
          name: '管理师历史满意度',
          value: 'a12',
          width: 140
        }, {
          name: '历史案件统计',
          value: 'a13',
          width: 120
        }, {
          name: '当前状态',
          value: 'a14'
        }
      ],
      tableData: [
        {
          a1: '1',
          a2: '北京',
          a3: '北京',
          a4: '23589',
          a5: '协和',
          a6: '三甲',
          a7: '好',
          a8: '周建风',
          a9: '主任',
          a10: '非常棒',
          a11: '赵1',
          a12: '8',
          a13: '52',
          a14: '待审批'
        }, {
          a1: '2',
          a2: '北京',
          a3: '北京',
          a4: '23589',
          a5: '协和',
          a6: '三甲',
          a7: '好',
          a8: '周建风',
          a9: '主任',
          a10: '非常棒',
          a11: '赵1',
          a12: '8',
          a13: '52',
          a14: '待审批'
        }, {
          a1: '3',
          a2: '北京',
          a3: '北京',
          a4: '23589',
          a5: '协和',
          a6: '三甲',
          a7: '好',
          a8: '周建风',
          a9: '主任',
          a10: '非常棒',
          a11: '赵1',
          a12: '8',
          a13: '52',
          a14: '待审批'
        }, {
          a1: '4',
          a2: '北京',
          a3: '北京',
          a4: '23589',
          a5: '协和',
          a6: '三甲',
          a7: '好',
          a8: '周建风',
          a9: '主任',
          a10: '非常棒',
          a11: '赵1',
          a12: '8',
          a13: '52',
          a14: '待审批'
        }, {
          a1: '5',
          a2: '北京',
          a3: '北京',
          a4: '23589',
          a5: '协和',
          a6: '三甲',
          a7: '好',
          a8: '周建风',
          a9: '主任',
          a10: '非常棒',
          a11: '赵1',
          a12: '8',
          a13: '52',
          a14: '待审批'
        }
      ]
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
