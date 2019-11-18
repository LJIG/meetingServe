const state = {
  imgFiles: [],
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
    const storeType = 'imgFiles'
    state[storeType] = newFile
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}