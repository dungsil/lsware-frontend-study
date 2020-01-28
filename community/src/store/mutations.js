import Cookies from 'js-cookie'

import http from '../plugins/http'

export default {
  // 엑세스 토큰
  setAccessToken (state, accessToken) {
    if (accessToken) {
      state.accessToken = accessToken
      http.defaults.headers.common.Authorization = `Bearer ${accessToken}` // HTTP 헤더에 엑세스 코드 인증 추가

      Cookies.set('accessToken', accessToken)
    }
  },
  deleteAccessToken (state) {
    state.accessToken = null
    delete http.defaults.headers.common.Authorization
    Cookies.remove('accessToken')
  },

  // 내 정보
  setMyInfo (state, info) {
    if (info) {
      state.info = info
    }
  },

  deleteMyInfo (state) {
    state.info = null
  },

  // 게시글
  fetchPost (state, post) {
    state.post = post
  }
}
