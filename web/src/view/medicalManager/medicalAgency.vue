<template>
  <div class="medicalManager">
    <div class="medicalManager_one" >
      <h4>{{ title1 }}</h4>
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
            <el-col :span="5">
              <el-form-item label="创建时间：" label-width="100px">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="是否二次服务" label-width="120px">
                <el-select v-model="form.resource">
                  <el-option label="二次服务" value="yes"></el-option>
                  <el-option label="首次服务" value="no"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="4" style="text-align:center;margin-top:5px">
              <el-button type="warning">查询</el-button>
            </el-col>
          </el-row>
        </el-form>
          <el-table
            :data="tableData"
            stripe
            border
            style="width:100%">
            <el-table-column
            prop="a1"
            label="预约号" >
            </el-table-column>
            <el-table-column
              prop="a2"
              label="姓名" >
            </el-table-column>
            <el-table-column
              prop="a3"
              label="性别">
            </el-table-column>
            <el-table-column
              prop="a4"
              label="证件类型">
            </el-table-column>
            <el-table-column
              prop="a5"
              label="证件号码">
            </el-table-column>
            <el-table-column
              prop="a6"
              label="联系方式">
            </el-table-column>
            <el-table-column
              prop="a7"
              label="是否安排">
            </el-table-column>
            <el-table-column
              prop="a8"
              label="服务状态">
            </el-table-column>
            <el-table-column
              prop="a9"
              label="个案管理师"
               width="120"  >
            </el-table-column>
             <el-table-column
              prop="a10"
              label="是否首次服务"
              width="120">
            </el-table-column>
            <el-table-column
              prop="a11"
              label="下单时间">
            </el-table-column>
            <el-table-column
              prop="a12"
              label="操作"
              align="center">
              <template slot-scope="scope">
                <el-button type="success" size="mini" @click="onDetail(scope.$index, scope.row)">查看</el-button>
              </template>
            </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="medicalManager_two">
      <h4>{{ title2 }}</h4>
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
            <el-col :span="5">
              <el-form-item label="预约号" label-width="100px">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="是否二次服务" label-width="120px">
                <el-select v-model="form.resource">
                  <el-option label="首次服务" value="yes"></el-option>
                  <el-option label="二次服务" value="no"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="4" style="text-align:right; margin-top:5px">
              <el-button type="warning">查询</el-button>
              <el-button type="warning">导出</el-button>
            </el-col>
          </el-row>
        </el-form>
         <el-table
            :data="tableData_two"
            stripe
            border
            style="width: 100%">
            <el-table-column
              fixed
              prop="a1"
              label="预约号" >
            </el-table-column>
            <el-table-column
              fixed
              prop="a2"
              label="姓名" >
            </el-table-column>
            <el-table-column
              prop="a3"
              label="性别">
            </el-table-column>
            <el-table-column
              prop="a4"
              label="证件类型">
            </el-table-column>
            <el-table-column
              prop="a5"
              label="证件号码">
            </el-table-column>
            <el-table-column
              prop="a6"
              label="联系方式">
            </el-table-column>
            <el-table-column
              prop="a7"
              label="是否安排">
            </el-table-column>
            <el-table-column
              prop="a8"
              label="服务状态">
            </el-table-column>
            <el-table-column
              prop="a9"
              label="个案管理师"
              width="100"  >
            </el-table-column>
             <el-table-column
              prop="a10"
              label="是否首次服务"
              width="120">
            </el-table-column>
             <el-table-column
              prop="a11"
              label="预约时间">
            </el-table-column>
             <el-table-column
              prop="a12"
              label="计划就诊时间"
              width="120">
            </el-table-column>
            <el-table-column
              prop="a13"
              label="下单时间">
            </el-table-column>
            <el-table-column
              prop="a6"
              label="操作"
              width="200"
              align="center">
                <template slot-scope="scope">
                <el-button type="success" size="mini" @click="onDetail(scope.$index, scope.row)"> 录入</el-button>
                 <el-button type="success" size="mini" @click="onDetail(scope.$index, scope.row)">查看</el-button>
                </template>
            </el-table-column>
        </el-table>
      </div>
    </div>
 </div>
</template>
<script>
export default {
  name: 'medicalManager',
  data () {
    return {
      title1: '服务管理-公共池',
      title2: '服务管理-个人池',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: '',
        type: [],
        resource: ''
      },
      tableData: [{
        a1: '0000001',
        a2: '张三',
        a3: '男',
        a4: '18810419251',
        a5: '申请审核',
        a6: '确诊'
      }, {
        a1: '0000001',
        a2: '张三',
        a3: '男',
        a4: '18810419251',
        a5: '申请审核',
        a6: '确诊'
      }, {
        a1: '0000001',
        a2: '张三',
        a3: '男',
        a4: '18810419251',
        a5: '申请审核',
        a6: '确诊'
      }],
      tableData_two: [{
        a1: '0000001',
        a2: '张三',
        a3: '男',
        a4: '18810419251',
        a5: '申请审核',
        a6: '确诊'
      }, {
        a1: '0000001',
        a2: '张三',
        a3: '男',
        a4: '18810419251',
        a5: '申请审核',
        a6: '确诊'
      }, {
        a1: '0000001',
        a2: '张三',
        a3: '男',
        a4: '18810419251',
        a5: '申请审核',
        a6: '确诊'
      }]
    }
  },
  methods: {
    onDetail () {}
  }
}
</script>

<style lang="less" scoped>
.medicalManager {
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
    overflow-y: auto;
    .el-button {
      padding: 5px 15px
    }
    .el-form-item {
      margin-bottom: 6px

    }
    .el-table {
      margin:15px 0;
    }
    .medicalManager_one {
      margin-left: 10px
    }
  }
}
</style>
