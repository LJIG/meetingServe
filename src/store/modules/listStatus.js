const state = {
  current: ''
}

const getters = {
  getCurrent (state) {
    return state.current
  }
}

const actions = {
  changeStatus ({ commit }, value) {
    commit("SET_STATUS", value)
  }
}

const mutations = {
  SET_STATUS (state, value) {
    const _key = 'current'
    state[_key] = value
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}