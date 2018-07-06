import axios from 'axios'
import qs from 'qs'
import 'es6-promise'

// axios.defaults.baseURL = '/api';

export function get (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

export function post (url, data) {
  return new Promise((resolve, reject) => {
    // axios.post(url, qs.stringify(data), {
    axios.post(url, data, {
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded'
        'Content-Type': 'application/json'
      }
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

export function DELETE (url, data) {
  return new Promise((resolve, reject) => {
    axios.delete(url, {data: data}, {
    // axios.delete(url, data, {
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded'
        'Content-Type': 'application/json'
      }
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}
