import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    token: null,
    user: null
  },
  getters: {
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    setToken ({ commit }, token) {
      commit('setToken', token)
    },
    setUser ({ commit }, user) {
      commit('setuser', user)
    }

  },
  modules: {
  }
})
