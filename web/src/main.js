// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import promise from 'es6-promise'
import store from './store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import 'babel-polyfill'
import api from './api/api'
import VueDirectiveImagePreviewer from 'vue-directive-image-previewer'
import 'vue-directive-image-previewer/dist/assets/style.css'
import VuePreview from 'vue-preview'
import axios from 'axios'
Vue.prototype.$http = axios.create({
  timeout: 10 * 1000
})
Vue.use(ElementUI)
Vue.use(VueDirectiveImagePreviewer)
// defalut install
Vue.use(VuePreview)
Vue.prototype.$api = api
// with parameters install
Vue.use(VuePreview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: {top: 0, bottom: 0},
  captionEl: false,
  fullscreenEl: false,
  shareEl: false,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: false
})
// import jquery from 'jquery'
// import './assets/dist/css/bootstrap.min.css'
// import './assets/dist/js/bootstrap.min.js'

Vue.config.productionTip = false
// promise.polyfill()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // jquery,
  store,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.auth)) {
    if (window.localStorage.isLogin === '1') {
      next()
    } else if (to.path !== '/') {
      next({path: '/login'})
      Vue.prototype.$message.warning('检测到您还未登录,请登录后操作！')
    }
  } else {
    next()
  }
})
