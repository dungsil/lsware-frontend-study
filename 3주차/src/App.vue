<template>
  <div id="app">
    <AppHeader />
    <Memo />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import Memo from './components/memo/Memo'
export default {
  name: 'app',
  components: {
    Memo,
    AppHeader
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
}
</script>
<style>
  @import "./reset.css";
  #app {
    width: 560px;
    margin: 0 auto;
  }
</style>
