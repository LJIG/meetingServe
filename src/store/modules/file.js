const state = {
  files: [11]
}

const getters = {
  cartProducts: (state) => {
    return state.files
  }
}

const actions = {
  setFiles ({ commit }, files) {
    commit('FILES', files)
  }
}

const mutations = {
  FILES (state, newFile) {
    state.files = newFile
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}