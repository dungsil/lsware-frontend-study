<template>
  <header class="header">
    <router-link to="/" tag="h1" class="logo">VueJS Community</router-link>

    <div class="nav">
      <router-link to="/auth/login" v-if="isNotLogin">로그인</router-link>
      <div v-else>
        <button type="button" @click="toggleLogout" class="toggle">
          {{ info.name }}님 환영합니다!
        </button>
        <button @click="onLogout"
                :class="{ view: isToggleLogout }"
                type="button"
                class="logout">로그아웃</button>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'AppHeader',
  data () {
    return {
      isToggleLogout: false
    }
  },
  computed: {
    ...mapState(['info']),
    ...mapGetters(['isNotLogin'])
  },
  methods: {
    ...mapActions(['logout']),
    onLogout () {
      this.isToggleLogout = false
      this.logout()
      this.$router.push({ name: 'Index' })
    },
    toggleLogout () {
      this.isToggleLogout = !this.isToggleLogout
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
  z-index: 9999;
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

.toggle {
  all: initial;
}

.toggle::after {
  display: inline-block;
  content: "▼";
  margin-left: 3px;
  font-size: .5em;
  vertical-align: middle;

  cursor: pointer;
}

.logout {
  all: initial;
  display: none;
}

.logout.view {
  display: block;
  width: 100%;
  background-color: lightgrey;
  text-align: center;

  cursor: pointer;
}
</style>
