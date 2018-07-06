/*
**
***************运营人员
**
*/

// 运营人员待办
import operatorAgency from '../view/operatPerson/operatorAgency'

// 运营人员审批
import operatorApproval from '../view/operatPerson/operatorApproval'

export var routes = [
  {
    name: 'operatorAgency',
    path: '/operatPerson/operatorAgency',
    component: operatorAgency
  }, {
    name: 'operatorApproval',
    path: '/operatPerson/operatorApproval',
    component: operatorApproval
  }
]
