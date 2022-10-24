import { createStore } from 'vuex'

const store = createStore({
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  getters: {
    song (state) {
      return (songId) => {
        return state.songs.find((song) => song.id === songId)
      }
    }
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
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
      commit('setUser', user)
    }

  },
  modules: {
  }
})

export default store
