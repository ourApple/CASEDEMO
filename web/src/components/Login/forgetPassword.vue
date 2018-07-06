<template>
  <div class="login">
    <transition name="form-fade" mode="in-out">
      <section>
        <transition name="form-fade" mode="in-out">
          <div class="loginContent" v-show="showLogin">
            <el-form class="loginForm" :model="loginForm" :rules="rules" ref="loginForm" label-width="94px">
              <h3><img src="./img/logo.png" alt=""></h3>
              <el-form-item prop="username" label="用户名">
                <el-input v-model="loginForm.username"  auto-complete="off" placeholder="用户名" @keyup.enter.native="submitForm('loginForm')"></el-input>
              </el-form-item>
              <el-row>
								<el-col :span="15">
									<el-form-item prop="bileYanzhengma" label="手机验证码">
										<el-input placeholder="请输入验证码" v-model="loginForm.bileYanzhengma" @keyup.enter.native="submitForm('loginForm')"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="8" :offset="1">
                  <el-button class="checkBtn el-button el-button--warning">获取验证码</el-button>
								</el-col>
							</el-row>
              <el-form-item prop="password" label="新密码">
                <el-input type="password" placeholder="新密码" v-model="loginForm.password" @keyup.enter.native="submitForm('loginForm')"></el-input>
              </el-form-item>
              <el-form-item prop="passwordNew" label="新密码确认">
                <el-input type="password" placeholder="新密码确认" v-model="loginForm.passwordNew" @keyup.enter.native="submitForm('loginForm')"></el-input>
              </el-form-item>
              <el-form-item>
                  <span>单击图片更换</span>
                  <el-button @click="createCode" class="verificationCheckBtn">{{ checkCode }}</el-button>
                  <el-input placeholder="请输入验证码" v-model="loginForm.picLyanzhengma" @keyup.enter.native="submitForm('loginForm')"></el-input>
              </el-form-item>
              <el-form-item class="loginBtn">
                <el-button @click="submitForm('loginForm')" class="submit_btn">保存修改</el-button>
              </el-form-item>
            </el-form>
          </div>
        </transition>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: '',
        passwordNew: '',
        picLyanzhengma: '',
        bileYanzhengma: ''
      },
      remember: '',
      checkCode: '',
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入新密码', trigger: 'blur' }
        ],
        passwordNew: [
          { required: true, message: '请再次输入新密码', trigger: 'blur' }
        ],
        bileYanzhengma: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      },
      showLogin: false
    }
  },
  mounted () {
    this.showLogin = true
    this.createCode()
  },
  methods: {
    // 表单提交验证
    async submitForm (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          this.loginForm.picLyanzhengma.toUpperCase()
          if (this.loginForm.picLyanzhengma === '') {
            this.$message({
              message: '请输入验证码',
              type: 'warning'
            })
          } else if (this.loginForm.picLyanzhengma.toUpperCase() !== this.checkCode) {
            this.$message.error('验证码输入错误')
            this.createCode()
            this.loginForm.picLyanzhengma = ''
          } else {
            this.$router.push(
              {name: 'Home'}
            )
            this.$message({
              message: '登录成功',
              type: 'success'
            })
          }
        } else {
          this.$message.error('请输入正确的信息')
          return false
        }
      })
    },
    // 验证码
    createCode () {
      var code = ''
      var codeLength = 4
      let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      var random = arr
      for (var i = 0; i < codeLength; i++) {
        var index = Math.floor(Math.random() * 36)
        code += random[index]
      }
      this.checkCode = code
    },
    changePassword () {
      this.$router.push({'path': '/changePassword'})
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  // background: url('./img/login_bg.jpg') no-repeat;
  // 垂直水平居中 不兼容IE9
  // display:flex;
  // justify-content:center;
  // align-items:center;
   .el-form-item {
    margin-bottom: 10px;
  }
  .loginLeft {
    float:left;
    width: 45%;
    height: 100%;
    background: url('./img/shape.png') no-repeat;
    text-align: center;
    img {
      width: 432px;
    }
    span {
      display:inline-block;
      height:100%;
      vertical-align:middle;
    }
  }
  .loginContent {
    width: 100%;
    height: 100%;
    position: relative;
    .loginForm {
      width: 360px;
      padding: 20px 20px 0 20px;
      border-radius: 6px;
      position: absolute;
      top: 50%;
      left: 50%;
      height: 560px;
      margin-left: -208px;
      margin-top: -280px;
      text-align: center;
      .loginBtn {
        button {
          width: 100%;
          background: #149589;
          color: #fff
        }
      }
      .checkBtn {
        float: right;
        width: 100%;
        margin-top:5px;
        padding:7px 20px;
      }
      .verificationCheckBtn{
        float: left;
        width: 50%;
        margin-bottom:10px;
        padding: 7px 20px;
        margin-top: 5px;
      }
      .forgetPassword{
        color:#3187e5;
        cursor:pointer;
      }
    }
  }
  h3 {
    text-align: center;
    color: #fff;
    margin-bottom: 20px;
  }
  section {
    height: 100%;
  }
  .form-fade-enter-active, .form-fade-leave-active {
    transition: all 1s;
  }
  .form-fade-enter, .form-fade-leave-active {
    transform: translate3d(0, -50px, 0);
    opacity: 0;
  }
  /* 更改element原有的样式 */
  .el-input--prefix .el-input__inner {
    background:#b5c7d5 ;
    border-color:#202d3d ;
    padding-left: 55px;
  }
  // placeholder样式
  input.el-input__inner::-webkit-input-placeholder {
    color: #595d61;
  }
}
</style>
