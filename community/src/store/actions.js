import http from '../plugins/http'

const endpoint = {
  login: '/auth/signin',
  myInfo: '/users/me'
}

export default {
  login ({ commit }, payload) {
    return http.post(endpoint.login, payload)
      .then((res) => {
        const { accessToken } = res.data
        commit('setAccessToken', accessToken)
        return http.get(endpoint.myInfo)
      })
      .then((res) => {
        commit('setMyInfo', res.data)
      })
  },
  logout ({ commit }) {
    commit('deleteAccessToken')
    commit('deleteMyInfo')
  },
  loginByToken ({ commit }, accessToken) {
    commit('setAccessToken', accessToken)
    return http.get(endpoint.myInfo)
      .then((res) => commit('setMyInfo', res.data))
  }
}
