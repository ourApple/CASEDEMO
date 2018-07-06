/*
**
***************供应商管理
**
*/

// 医院医生维护
import hospitalDoctorMaintense from '../view/supplierManagement/hospitalDoctorMaintense'

// 运营人员审批医生
import approvingDoctors from '../view/supplierManagement/approvingDoctors'

// 测试
import test from '../view/supplierManagement/test'
export var routes = [
  {
    name: 'hospitalDoctorMaintense',
    path: '/supplierManagement/hospitalDoctorMaintense',
    component: hospitalDoctorMaintense
  }, {
    name: 'approvingDoctors',
    path: '/supplierManagement/approvingDoctors',
    component: approvingDoctors
  }, {
    name: 'test',
    path: '/test',
    component: test
  }
]
