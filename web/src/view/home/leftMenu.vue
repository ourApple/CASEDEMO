<template>
  <div class="leftMenu">
    <el-row>
      <el-col :span="24">
        <el-menu
          default-active="1"
          unique-opened
          class="el-menu-vertical-demo">
          <el-submenu :index="item.id.toString()" v-for="item in this.navigationData" :key="item.id" v-if="item.children != null">
            <template slot="title">
              {{ item.label }}
            </template>
            <el-menu-item-group>
              <el-menu-item :index="v.id.toString()" v-for="v in item.children" :key="v.id" @click="navigateTo(v)">
                {{ v.label }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item :index="item.id.toString()"  v-for="item in this.navigationData" :key="item.id" v-if="item.children == null" @click="navigateTo(item)">
            <span slot="title">{{ item.label}}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'leftMenu',
  data () {
    return {
      navigationData: []
    }
  },
  created () {
    this.getNavigation()
  },
  methods: {
    getNavigation () {
      this.$http.get('../../../static/data/menu.json').then(res => {
        let data = res.data.result.rows
        if (data) {
          data.forEach(item => {
            this.navigationData = data
          })
        }
      }).catch(err => {
        console.log(err)
      })
    },
    navigateTo (data) {
      // this.$emit('urlCallBack', data)
      // console.log(data)
      this.$router.push(
        {'path': data.url}
      )
    }
  }
}
</script>
<style lang="less">
.el-menu {
  border: none
}
.el-submenu__title {
  width: 170px;
  border-radius: 30px;
  margin: 15px 15px 0 15px;
  height: 36px;
  background: #f1f1f1;
  color: #000;
  i {
    color: #000
  }
}
.el-menu-item, .el-sbumenu {
  // margin: 15px;
  width: 170px;
  min-width: 170px !important;
  background: none;
  color: #000;
  height: 36px;
  line-height: 36px;
  border-radius: 30px;
  &:active, &:focus {
    background-color: none;
  }
  &.is-active {
    color: #149c83;
    background: none
  }
}
.el-submenu__title {
  height: 36px;
  line-height: 36px;
  i.el-submenu__icon-arrow {
    // margin-right: -10px;
  }
}
.el-submenu.is-active .el-submenu__title {
    background-color: #149c83;
    color: #fff;
    i {
      color: #fff
    }
}
.el-menu-item:hover, .el-submenu__title:hover {
  background-color: #149c83;
  color: #fff;
  i {
    color: #fff
  }
}
.el-menu-item-group .el-menu-item:hover {
  background: none;
  color: #149c83
}
.el-submenu .el-menu-item {
  height: 30px;
  line-height: 30px;
}
</style>
