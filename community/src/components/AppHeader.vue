<template>
  <header class="header">
    <router-link to="/" tag="h1" class="logo">VueJS Community</router-link>

    <div class="nav">
      <router-link to="/auth/login" v-if="isNotLogin">로그인</router-link>
      <div v-else>
        <button type="button" @click="onLogout" class="logout">로그아웃</button>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'AppHeader',
  computed: {
    ...mapState(['info']),
    ...mapGetters(['isNotLogin'])
  },
  methods: {
    ...mapActions(['logout']),
    onLogout () {
      this.logout()
      this.$router.push({ name: 'Index' })
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ededed;
  background-color: #fff;
}

.logo {
  position: absolute;
  top: 12px;
  left: 20px;
  margin: 0;
  font-size: 26px;
}

.nav {
  position: absolute;
  top: 20px;
  right: 20px;
}

.logout {
  all: initial;
}
</style>
