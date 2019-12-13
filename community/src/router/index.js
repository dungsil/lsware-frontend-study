import Vue from 'vue'
import Router from 'vue-router'

import Header from '@/components/AppHeader'

import Index from '@/pages/Index'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    router(Index, '/'), // 메인페이지
    router(Login, '/login')
  ]
})

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
