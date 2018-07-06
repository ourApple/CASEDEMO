<template>
  <div class="operatPerson">
    <h4>{{ title }}</h4>
    <div class="main_bottom">
    </div>
  </div>
</template>

<script>
export default {
  name: 'operatPerson',
  data () {
    return {
      title: '录入随诊信息'
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
