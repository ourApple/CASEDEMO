<template>
  <div class="distributCase">
    <h4 class="title">{{ title }}</h4>
    <div class="main_bottom">
      <el-row class="approval">
        <el-col :span="24">
          <el-form ref="form" :model="form" label-width="75px">
            <h4 class="base-title">病例信息</h4>
            <div class="patientInfo">
              <p>用户信息</p>
              <el-row>
                <el-col :span="4">
                  <el-form-item label="姓名">
                    <el-input v-model="form.name" placeholder="张三"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="5">
                  <el-form-item label="手机号">
                    <el-input v-model="form.phone" placeholder="18810419251"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item label="预约号">
                    <el-input v-model="form.reserNumber" placeholder="0000001"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="5">
                  <el-form-item label="证件类型">
                    <el-input v-model="form.certiType" placeholder="二代身份证"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="证件号码">
                    <el-input v-model="form.certNumber" placeholder="123456789123456789"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <p>方案选择</p>
              <el-row>
                <el-col :span="4">
                  <el-form-item label="城市">
                    <el-input v-model="form.city" placeholder="保定市"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="5">
                  <el-form-item label="医院名称">
                    <el-input v-model="form.hospitalName" placeholder="保定的第一人民医院"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item label="医院级别">
                    <el-input v-model="form.hospitalLevel" placeholder="三级"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="5">
                  <el-form-item label="医生姓名">
                    <el-input v-model="form.doctorName" placeholder="刘亚"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="3" :offset="1" style="text-align: center">
                  <el-button type="info" @click="queryInfo">查询</el-button>
                </el-col>
              </el-row>
              <el-table
                :data="tableData"
                border
                stripe
                style="width: 100%"
                v-if="isShowTable">
                <el-table-column
                  prop="provice"
                  label="省"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="city"
                  label="市"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="hospitalName"
                  label="医院名称">
                </el-table-column>
                <el-table-column
                  prop="hospitalLevel"
                  label="医院级别">
                </el-table-column>
                <el-table-column
                  prop="hospitalIntro"
                  label="医院简介">
                </el-table-column>
                <el-table-column
                  prop="docorName"
                  label="医生姓名">
                </el-table-column>
                <el-table-column
                  prop="doctorTitle"
                  label="医生职称">
                </el-table-column>
                <el-table-column
                  prop="doctorIntro"
                  label="医生简介">
                </el-table-column>
                <el-table-column
                  label="操作"
                  align="center">
                  <template slot-scope="scope">
                    <el-button type="info" size="mini">添加</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <el-row v-if="isShowTable">
                <el-row>
                  <el-col :span="3">
                    <el-checkbox v-model="form.enmargeHospital">预计急诊医院</el-checkbox>
                  </el-col>
                  <el-col :span="3">
                    <el-select v-model="form.value" placeholder="列表项">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="3" :offset="1">
                    <el-input v-model="form.hospitalRank">医院职级</el-input>
                  </el-col>
                  <el-col :span="5" style="margin-top: -5px" :offset="1">
                    <el-form-item label="预计就诊医生" label-width = "100px">
                      <el-select v-model="form.seeDoctor" placeholder="列表项">
                        <el-option label="列表一" value="shanghai"></el-option>
                        <el-option label="列表二" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="3" :offset="1">
                    <el-input v-model="form.hospitalRank">医院职级</el-input>
                  </el-col>
                  <el-col :span="3" :offset="1">
                    <el-input v-model="form.hospitalRank">医院职级</el-input>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="3">
                    <el-checkbox v-model="form.enmargeHospital">预计急诊医院</el-checkbox>
                  </el-col>
                  <el-col :span="3">
                    <el-select v-model="form.value" placeholder="列表项">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="3" :offset="1">
                    <el-input v-model="form.hospitalRank">医院职级</el-input>
                  </el-col>
                  <el-col :span="5" style="margin-top: -5px" :offset="1">
                    <el-form-item label="预计就诊医生" label-width = "100px">
                      <el-select v-model="form.seeDoctor" placeholder="列表项">
                        <el-option label="列表一" value="shanghai"></el-option>
                        <el-option label="列表二" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="3" :offset="1">
                    <el-input v-model="form.hospitalRank">医院职级</el-input>
                  </el-col>
                  <el-col :span="3" :offset="1">
                    <el-input v-model="form.hospitalRank">医院职级</el-input>
                  </el-col>
                </el-row>
              </el-row>
            </div>
            <h4 class="base-title">影像信息</h4>
            <div class="imageInfo" id="imgList">
              <img :src="item.src" v-for="(item, index) in imgList" :key="item.id"  @click="onList(index)">
            </div>
            <el-row>
              <el-col :span="5">
                <el-form-item label="资料审核结果" label-width="100px">
                  <el-select v-model="form.result" placeholder="资料审核结果">
                    <el-option label="结果一" value="res1"></el-option>
                    <el-option label="结果二" value="res2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="5">
                <el-form-item>
                  <el-button type="info">返回客户补充</el-button>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="form.resultTxt">
              </el-input>
            </el-row>
            <el-row style="margin-top: 5px;">
              <el-checkbox v-model="form.previousRecord">除个案服务外的既往诊断记录</el-checkbox>
            </el-row>
            <el-row style="border:1px solid #ddd; padding: 10px; margin:10px 0">
              <el-form-item label="诊断证明资料" label-width="100px">
                <el-upload
                  class="upload-demo"
                  action=""
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :file-list="fileList"
                  list-type="picture">
                  <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
              </el-form-item>
            </el-row>
            <el-row style="margin-top: 5px;">
              <el-checkbox v-model="form.allocation">以上信息确认无误, 分配个案管理师</el-checkbox>
            </el-row>
            <div class="advice">
              <el-row>
                <el-col :span="6">
                  <el-form-item label="地域选择">
                    <el-col :span="11">
                      <el-select v-model="form.chooseProvice" placeholder="省">
                        <el-option label="河北" value="s"></el-option>
                        <el-option label="上海" value="re2s2"></el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="11" style="margin-left: 10px">
                      <el-select v-model="form.chooseCity" placeholder="市">
                        <el-option label="河北" value="r1"></el-option>
                        <el-option label="上海" value="r2"></el-option>
                      </el-select>
                    </el-col>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="选择医院">
                    <el-col :span="24">
                      <el-select v-model="form.chooseHospital" placeholder="选择医院">
                        <el-option label="保定第一医院" value="q1"></el-option>
                      </el-select>
                    </el-col>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="选择个案管理师" label-width="120px">
                    <el-col :span="24">
                      <el-select v-model="form.chooseManage" placeholder="选择个案管理师">
                        <el-option label="李然" value="n"></el-option>
                      </el-select>
                    </el-col>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="6">
                  <el-form-item label="个案管理师联系方式" label-width="140px">
                    <el-input v-model="form.managePhone" placeholder="18810419251"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="就诊时间" label-width="80px">
                    <el-date-picker
                      v-model="form.clinicTime"
                      type="date"
                      placeholder="选择日期">
                    </el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item label="意见/建议">
                    <el-input
                      type="textarea"
                      :rows="2"
                      placeholder="请输入内容"
                      v-model="form.advice">
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8" :offset="14">
                  <el-button size="small" type="success">提交</el-button>
                  <span class="submitInfo">提交成功后，给客户推送预约短信提醒</span>
                </el-col>
              </el-row>
            </div>
          </el-form>
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
  data () {
    return {
      title: '分配个案管理师',
      isShowTable: false,
      form: {
        name: '',
        phone: '',
        reserNumber: '',
        certiType: '',
        certNumber: '',
        city: '',
        hospitalName: '',
        hospitalLevel: '',
        doctorName: '',
        enmargeHospital: '',
        value: '',
        hospitalRank: '',
        seeDoctor: '',
        result: '',
        resultTxt: '',
        previousRecord: '',
        allocation: '',
        chooseProvice: '',
        chooseCity: '',
        chooseHospital: '',
        chooseManage: '',
        managePhone: '',
        clinicTime: '',
        advice: ''
      },
      options: [{
        value: '选项1',
        label: '列表'
      }, {
        value: '选项2',
        label: '列表'
      }, {
        value: '选项3',
        label: '列表'
      }, {
        value: '选项4',
        label: '列表'
      }, {
        value: '选项5',
        label: '列表'
      }],
      tableData: [{
        provice: '北京',
        city: '',
        hospitalName: '',
        hospitalLevel: '',
        hospitalIntro: '',
        docorName: '',
        doctorTitle: '',
        doctorIntro: ''
      }, {
        provice: '保定',
        city: '',
        hospitalName: '',
        hospitalLevel: '',
        hospitalIntro: '',
        docorName: '',
        doctorTitle: '',
        doctorIntro: ''
      }],
      imgList: [
        {
          id: 1,
          src: require('./img/timg.jpg')
        }, {
          id: 2,
          src: require('./img/1.jpg')
        }
      ],
      fileList: [{
        name: '1.jpeg',
        url: require('./img/1.jpg')
      }, {
        name: 'timg.jpeg',
        url: require('./img/timg.jpg')
      }]
    }
  },
  methods: {
    // 查询
    queryInfo () {
      this.isShowTable = true
    },
    // 图片查看器
    onList (index) {
      var ziv = new ZxImageView(options, imgArray)
      ziv.view(index)
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    }
  }
}
</script>
<style lang="less" scoped>
.distributCase {
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
    background: #fff;
    height: calc(100% - 40px);
    padding: 15px;
    overflow-y: auto;
    .approval {
      margin-bottom: 30px
    }
    .base-title {
      font-size: 14px;
    }
    .patientInfo {
      border: 1px solid #ddd;
      padding: 10px;
      margin: 5px 0;
      p {
        font-size: 14px;
      }
    }
    .imageInfo {
      padding: 10px;
      border: 1px solid #ddd;
      height: 200px;
      margin: 5px 0;
      img {
        height: 100%;
        margin-right: 10px;
      }
    }
    .advice {
      padding: 10px;
      border: 1px solid #ddd;
      margin: 5px 0;
      .submitInfo {
        font-size: 14px
      }
    }
    .el-button {
      padding: 7px 26px;
      margin-top: 4px
    }
    .el-form-item {
      margin-bottom: 6px
    }
    .el-table {
      margin:10px 0;
      .el-button {
        padding: 7px 20px;
      }
    }
  }
}
</style>
