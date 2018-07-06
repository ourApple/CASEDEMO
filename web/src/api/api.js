import {get, post} from './index'

export function getDrillhole () {
  const result = get('/api/drillhole')
  return result
}

export function getSearch (data) {
  const result = post('/api/laneway/search', data)
  return result
}
export default {}
