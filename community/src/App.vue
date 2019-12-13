<template>
  <div id="app">
    <router-view name="header" />

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  width: 100%;
  min-height: 100vh;
  background-color: #ededed;
}
.content {
  padding-top: 60px;
}
</style>
