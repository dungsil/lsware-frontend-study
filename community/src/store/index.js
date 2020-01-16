import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: import('./state'),
  actions: import('./actions'),
  mutations: import('./mutations'),
  getters: import('./getters')
})
