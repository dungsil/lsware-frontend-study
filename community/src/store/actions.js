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
  },

  // 게시글
  fetchPost ({ commit }, postId) {
    return http.get(`/posts/${postId}`)
      .then((res) => commit('fetchPost', res.data))
  },

  // 덧글
  addComment ({ state, commit }, comment) {
    return http.post(`/posts/${state.post.id}/comments`, { contents: comment })
      .then(res => commit('syncComment', res.data))
  },
  editComment ({ state, commit }, comment) {

  },
  deleteComment ({ state, commit }, comment) {

  }
}
