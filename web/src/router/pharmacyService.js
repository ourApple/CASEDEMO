/*
**
***************药房服务人员
**
*/

// 药房待办功能
import pharmacyFun from '../view/pharmacyService/pharmacyFun'

// 药品查询功能
import drugQueryFun from '../view/pharmacyService/drugQueryFun'

export var routes = [
  {
    name: 'pharmacyFun',
    path: '/pharmacyService/pharmacyFun',
    component: pharmacyFun
  }, {
    name: 'drugQueryFun',
    path: '/pharmacyService/drugQueryFun',
    component: drugQueryFun
  }
]
