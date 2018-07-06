/*
**
***************个案管理师
**
*/
// 个案服务待办
import caseServiceAgency from '../view/caseManager/caseServiceAgency'

// 录入门诊信息
import enterOutpatientInfo from '../view/caseManager/enterOutpatientInfo'

// 录入住院信息
import enterInpatientInfo from '../view/caseManager/enterInpatientInfo'

// 录入出院信息
import enterDischargeInfo from '../view/caseManager/enterDischargeInfo'

// 录入随诊信息
import enterAdmissionInfo from '../view/caseManager/enterAdmissionInfo'

export var routes = [
  {
    name: 'caseServiceAgency',
    path: '/caseManager/caseServiceAgency',
    component: caseServiceAgency
  }, {
    name: 'enterOutpatientInfo',
    path: '/caseManager/enterOutpatientInfo',
    component: enterOutpatientInfo
  }, {
    name: 'enterInpatientInfo',
    path: '/caseManager/enterInpatientInfo',
    component: enterInpatientInfo
  }, {
    name: 'enterDischargeInfo',
    path: '/caseManager/enterDischargeInfo',
    component: enterDischargeInfo
  }, {
    name: 'enterAdmissionInfo',
    path: '/caseManager/enterAdmissionInfo',
    component: enterAdmissionInfo
  }
]
