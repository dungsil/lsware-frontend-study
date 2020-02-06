<template>
  <div id="app">
    <router-view name="header" />

    <div class="content">
      <div class="card">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  display: table;
  width: 100%;
  height: 100vh;
  background-color: #ededed;
}

.content {
  display: table-cell;
  vertical-align: middle;
}

.card {
  width: 50%;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 4px 10px -4px rgba(0, 0, 0, 0.2);

  margin: 100px auto 0;
}
</style>
