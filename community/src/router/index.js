import Vue from 'vue'
import Router from 'vue-router'

import Header from '../components/AppHeader'

import Index from '../pages/Index'

// 회원관리
import Registry from '../pages/auth/Registry'
import Login from '../pages/auth/Login'

// 게시글 관리
import PostDetail from '../pages/post/PostDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    router(Index, '/'), // 메인페이지

    // 회원관리
    router(Login, '/auth/login'), // 로그인 페이지
    router(Registry, '/auth/registry'), // 회원가입 페이지

    // 게시글 관리
    router(PostDetail, '/posts/:id')
  ]
})

/** 간단한 라우터 생성을 위한 함수 */
function router (component, path) {
  return {
    path,
    name: component.name,
    components: {
      default: component,
      header: Header
    }
  }
}
