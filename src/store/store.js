import Vue from 'vue'
import Vuex from 'vuex'
import file from './modules/file'

Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {
    name: '辅助001'
  },
  getters:{},
  mutations: {},
  actions: {},
  modules: {
    file
  }
})

export default Store