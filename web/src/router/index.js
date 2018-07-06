import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/index'
import forgetPassword from '@/components/login/forgetPassword'
import Home from '@/view/home/index'

// import operatPerson from '../view/operatPerson'
// import medicalManager from '../view/medicalManager'
// import caseManager from '../view/caseManager'
// 运营人员
import { routes as operatPerson } from './operatPerson'
// 医学经理
import { routes as medicalManager } from './medicalManager'
// 个案管理师
import { routes as caseManager } from './caseManager'
// 药房服务人员
import { routes as pharmacyService } from './pharmacyService'
// 费控人员审核
import { routes as feeControlReview } from './feeControlReview'
// 理赔人员审核
import { routes as claimAuditors } from './claimAuditors'
// 供应商管理
import { routes as supplierManagement } from './supplierManagement'

Vue.use(Router)
// const login = r => require.ensure([], () => r(require('@/components/login')), 'login')
var manageRoutes = operatPerson.concat(medicalManager, caseManager, pharmacyService, feeControlReview, claimAuditors, supplierManagement)
const routes = [
  {
    path: '/',
    component: Login,
    name: 'Login',
    meta: {auth: true}
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/forgetPassword',
    name: 'forgetPassword',
    component: forgetPassword
  }, {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {auth: true},
    redirect: '/operatPerson/operatorAgency',
    children: manageRoutes
  }
]

export default new Router({
  routes,
  strict: process.env.NODE_ENV !== 'production'
})
