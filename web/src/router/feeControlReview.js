/*
**
***************费控人员审核
**
*/

// 运营人员待办
import prescriptionReview from '../view/feeControlReview/prescriptionReview'

// 运营人员审批
import qualificationReview from '../view/feeControlReview/qualificationReview'

export var routes = [
  {
    name: 'prescriptionReview',
    path: '/feeControlReview/prescriptionReview',
    component: prescriptionReview
  }, {
    name: 'qualificationReview',
    path: '/feeControlReview/qualificationReview',
    component: qualificationReview
  }
]
