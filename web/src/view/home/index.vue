<template>
  <div class="home">
    <el-header style="height:80px;">
      <div class="headerLeft">
        <img src="./img/logo.png" alt="" class= "tonic">
      </div>
      <div class="headerRight">
        <div class="rightL">
          <p class="logoInfo">肿瘤个案管理系统</p>
          <p class="logoEnInfo">Cancer case management system</p>
        </div>
        <div class="rightR">
          <p class="org"><span>机构：</span><span>总公司</span></p>
          <p class="user" @click="returnLogin"><span>当前用户：</span><span>林允儿</span></p>
        </div>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <!-- 左侧菜单导航 -->
        <left-menu v-on:urlCallBack='handleMenuEvent'></left-menu>
      </el-aside>
      <!-- 右侧内容区域 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import leftMenu from './leftMenu'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {
    leftMenu
  },
  methods: {
    handleMenuEvent (data) {
      this.$router.push({ 'path': data.url })
    },
    returnLogin () {
      this.$store.commit('$_removeStorage')
      this.$store.commit('$_removeState')
      this.$store.commit('$_setLogin', '0')
      this.$router.push({path: '/login'})
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/style.less';
.home{
  height: 100%;
}
.el-header{
  padding:0;
  box-shadow:1px 1px 1px #000 inset;
}
.el-header, .el-footer {
  box-shadow:none;
  color: #fff;
  .headerLeft{
    float: left;
    width: 200px;
    height: 92%;
    background:#fafafa;
    text-align:  center;
    display: inline-block;
    box-shadow:-1px 2px 9px rgba(0, 0, 0, 0.17);
    .tonic {
      width: 100px;
      height: 44px;
      padding-top: 16px;
    }
  }
  .headerRight{
    width: calc(100% - 200px);
    height: 94%;
    float: right;
    background:#149c83;
    display: inline-block;
    box-shadow:2px 1px 10px rgba(6, 6, 6, 0.5);
    .rightL{
      float:left;
      padding-left: 65px;
      padding-top: 15px;
      .logoInfo{
        font-size: 25px;
        margin-bottom: 6px;
        color:#fafffd;
        letter-spacing: 10px;
        line-height:  30px;
      }
      .logoEnInfo{
        line-height: 16px;
        font-size: 14px;
        letter-spacing: 2px;
        color:#9de6db;
      }
    }
    .rightR{
      float: right;
      font-size: 14px;
      padding-top: 20px;
      padding-right: 30px;
      .org{
        line-height: 14px;
        margin-bottom: 10px;
        margin-left: 10px;
        span{
          margin-right: 5px;
        }
      }
      .user{
        line-height: 14px;
        display: block;
        padding: 4px 10px;
        border-radius: 10px;
        background:#0d9077;
        cursor: pointer;
        span {
          margin-right: 5px;
        }
      }
    }
  }
}

.el-aside {
  background-color: #fafafa;
  overflow-x: hidden;
  li {
    font-size: 14px;
    padding-left: 20px;
    line-height: 36px;
    color: #fff;
  }
  &:hover {
    cursor: pointer;
  }
}
.el-main {
  //  -webkit-box-shadow: #666 0px 0px 10px;
  //  -moz-box-shadow: #666 0px 0px 10px;
  //  box-shadow: #666 0px 0px 10px;
  //  border: #EEFF99;
   background: #f1f1f1;
   padding: 10px !important
}

</style>
