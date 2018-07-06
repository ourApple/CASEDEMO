/*
**
***************医学经理
**
*/

// 个案服务待办
import medicalAgency from '../view/medicalManager/medicalAgency'

// 个案分配管理师
import distributCaseManager from '../view/medicalManager/distributCaseManager'

// 管理医院信息
import manageHospitalInfo from '../view/medicalManager/manageHospitalInfo'

export var routes = [
  {
    name: 'medicalAgency',
    path: '/medicalManager/medicalAgency',
    component: medicalAgency
  }, {
    name: 'distributCaseManager',
    path: '/medicalManager/distributCaseManager',
    component: distributCaseManager
  }, {
    name: 'manageHospitalInfo',
    path: '/medicalManager/manageHospitalInfo',
    component: manageHospitalInfo
  }
]
