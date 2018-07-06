import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const key = 'user'
const stateKey = 'stateKey'
const isLogin = 'isLogin'
const store = new Vuex.Store({
  state () {
    return {
      user: null,
      stateKey: false,
      isLogin: '0'
    }
  },
  getters: {
    getStorage: function (state) {
      if (!state.user) {
        state.user = JSON.parse(localStorage.getItem(key))
        state.stateKey = localStorage.getItem(stateKey)
        state.isLogin = localStorage.getItem(isLogin)
      }
      return state.user
    }
  },
  mutations: {
    $_setLogin (state, value) {
      state.isLogin = value
      localStorage.setItem(isLogin, value)
    },
    $_setStorage (state, value) {
      state.user = value
      localStorage.setItem(key, JSON.stringify(value))
    },
    $_removeStorage (state) {
      state.user = null
      localStorage.removeItem(key)
    },
    $_setState (state, value) {
      state.stateKey = value
      localStorage.setItem(stateKey, value)
    },
    $_removeState (state) {
      state.stateKey = null
      localStorage.removeItem(stateKey)
    }
  }
})

export default store
