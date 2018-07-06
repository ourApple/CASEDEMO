import {get, post, DELETE} from './index'

export function getDrillhole () {
  const result = get('/api/drillhole')
  return result
}

export function getSearch (data) {
  const result = post('/api/laneway/search', data)
  return result
}
export function deleteChamber (data) {
  const result = DELETE('/api/sensor_info', data)
  return result
}

export default {}
