<template>
  <div id="app">
    <AppHeader :count="count" />
    <Memo @change="updateCount" />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import Memo from './components/memo/Memo'
export default {
  name: 'App',
  components: {
    Memo,
    AppHeader
  },
  data () {
    return {
      count: 0
    }
  },
  methods: {
    updateCount (count) {
      console.log(count)
      this.count = count
    }
  }
}
</script>
<style>
  @import "./reset.css";
  #app {
    width: 560px;
    margin: 0 auto;
  }
</style>
