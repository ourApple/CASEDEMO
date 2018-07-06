<template>
  <div class="operatorApproval">
    <h4 class="title">{{ title }}</h4>
    <div class="main_bottom">
      <el-row class="approval">
        <el-col :span="17">
          <h4 class="base-title">基本信息</h4>
          <el-form ref="form" :model="form" label-width="75px">
            <el-row>
              <el-col :span="6">
                <el-form-item label="姓名">
                  <el-input v-model="form.name" placeholder="自动带出保单信息"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="性别">
                  <el-input v-model="form.sex" placeholder="保单信息"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="预约号">
                  <el-input v-model="form.reservNumber" placeholder="保单信息"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="出生日期">
                  <el-date-picker
                    v-model="form.birdData"
                    type="date"
                    placeholder="选择日期">
                  </el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="证件类型">
                  <el-input v-model="form.docType" placeholder="保单信息"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="证件号码">
                  <el-input v-model="form.docNum" placeholder="保单信息"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="保单号">
                  <el-input v-model="form.policyNum" placeholder="保单信息"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="手机号">
                  <el-input v-model="form.phone" placeholder="保单信息"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="18">
                <el-form-item label="工作单位地址"  label-width="104px">
                  <el-input v-model="form.unitAddress" placeholder="保单信息"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="办公电话">
                  <el-input v-model="form.tel" placeholder="保单信息"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="现住地址省(区、市)" label-width="135px">
                  <el-input v-model="form.province" placeholder="保单信息"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="现住地址市" label-width="100px">
                  <el-input v-model="form.city" placeholder="保单信息"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="现住地址县"  label-width="100px">
                  <el-input v-model="form.county" placeholder="保单信息"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="预约手机号" label-width="85px">
                  <el-input v-model="form.reservPhone" placeholder="保单信息"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="客户等级" label-width="85px">
                  <el-select v-model="form.customerLevel" placeholder="保单信息">
                    <el-option label="等级一" value="b1"></el-option>
                    <el-option label="等级二" value="b2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="4" style="margin-top: 7px">
                <el-radio v-model="form.isMedicale" label="1">是否医保</el-radio>
              </el-col>
              <el-col :span="10">
                <el-form-item label="医保所在地" label-width="85px">
                  <el-input v-model="form.medicalPlace" placeholder="保单信息"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="社保卡号" label-width="85px">
                  <el-input v-model="form.socialNumber" placeholder="保单信息"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <h4 class="base-title">就诊信息</h4>
            <el-row>
              <el-col :span="8">
                <el-form-item label="疑似疾病类型" label-width="100px">
                  <el-select v-model="form.diseaseType" placeholder="保单信息">
                    <el-option label="类型一" value="l1"></el-option>
                    <el-option label="类型二" value="l2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <h4 class="base-title">审批信息</h4>
            <el-row>
              <el-col :span="12">
                <el-form-item label="服务类型" label-width="110px">
                  <el-select v-model="form.serviceType" placeholder="保单信息">
                    <el-option label="类型一" value="l1"></el-option>
                    <el-option label="类型二" value="l2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="审批状态" label-width="110px">
                  <el-select v-model="form.approvalStatus" placeholder="保单信息">
                    <el-option label="类型一" value="l1"></el-option>
                    <el-option label="类型二" value="l2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="申请途径" label-width="110px">
                  <el-select v-model="form.applyWay" placeholder="保单信息">
                    <el-option label="上网" value="s1"></el-option>
                    <el-option label="报纸" value="s2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="是否首次服务" label-width="110px">
                  <el-select v-model="form.isFirstService" placeholder="保单信息">
                    <el-option label="是" value="yes"></el-option>
                    <el-option label="否" value="no"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6" :offset="1">
                <el-button type="info" style="width:100%">历史记录服务查询</el-button>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="9">
                <el-form-item label="审核结果" label-width="110px">
                  <el-select v-model="form.auditResults" placeholder="保单信息">
                    <el-option label="已审核" value="r"></el-option>
                    <el-option label="待审核" value="o"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="原因/备注" label-width="110px">
                  <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="form.remark">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="分配供应商" label-width="110px">
                  <el-select v-model="form.supply" placeholder="保单信息">
                    <el-option label="供应商1" value="h1"></el-option>
                    <el-option label="供应商2" value="h2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="24" style="text-align: right;">
                <el-button type="success">保存</el-button>
                <el-button type="success">完成</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-col>
        <el-col :span="7" style="padding-left: 10px">
          <h4 class="base-title" style="padding-left: 10px">影像信息</h4>
          <!-- <div class="imageInfo">
            <img v-image-preview src="./img/timg.jpg"/>
          </div> -->
          <div id="imgList" class="imageInfo">
            <img :src="item.src" v-for="(item, index) in imgList" :key="item.id"  @click="onList(index)">
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { ZxImageView } from 'zx-image-view'
var options = {
  // 分页mouseover切换图片
  paginationable: true,
  // 显示关闭按钮
  showClose: true,
  // 显示上一张/下一张箭头
  showSwitchArrow: true,
  // 显示分页导航栏
  showPagination: true,
  // 缩放
  scalable: true,
  // 旋转
  rotatable: true,
  // 移动
  movable: true,
  showToolbar: true,
  // 键盘配置
  keyboard: {
    prev: 'a',
    next: 'd',
    rotate: ['up', 'down'],
    scale: 'mousewheel'
  }
}
var imgArray = [
  require('./img/timg.jpg'),
  require('./img/1.jpg')
]
export default {
  name: 'operatorApproval',
  data () {
    return {
      title: '审批-信息详情',
      form: {
        name: '',
        sex: '',
        reservNumber: '',
        birdData: '',
        docType: '',
        docNum: '',
        policyNum: '',
        phone: '',
        unitAddress: '',
        tel: '',
        province: '',
        city: '',
        reservPhone: '',
        customerLevel: '',
        isMedicale: false,
        medicalPlace: '',
        socialNumber: '',
        diseaseType: '',
        serviceType: '',
        approvalStatus: '',
        applyWay: '',
        isFirstService: '',
        auditResults: '',
        remark: '',
        supply: ''
      },
      imgList: [
        {
          id: 1,
          src: require('./img/timg.jpg')
        }, {
          id: 2,
          src: require('./img/1.jpg')
        }
      ]
    }
  },
  methods: {
    // 图片查看器
    onList (index) {
      var ziv = new ZxImageView(options, imgArray)
      ziv.view(index)
    }
  }
}
</script>

<style lang="less" scoped>
.operatorApproval {
  height: 100%;
  h4.title {
    height: 40px;
    line-height: 40px;
    background: #fff;
    padding-left: 20px;
    margin-bottom: 10px;
    font-size: 15px;
  }
  .main_bottom {
    .approval {
      margin-bottom: 30px
    }
    background: #fff;
    height: calc(100% - 40px);
    padding: 15px;
    overflow-y: auto;
    .base-title {
      font-size: 14px;
    }
    .el-form-item {
      margin-bottom: 3px
    }
    .el-button {
      padding: 8px 20px;
    }
    .imageInfo {
      margin: 10px;
      border: 1px solid #ddd;
      // height: 400px;
      padding: 10px;
      // width: auto;
      img {
        position: relative;
        width: 100%;
        height: 100%
      }
    }
  }
}
</style>
