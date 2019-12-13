<template>
  <header class="header">
    <h1>VueJS Community</h1>

    <p class="login">
      <a href="/login">로그인</a>
    </p>
  </header>
</template>

<script>
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid #ededed;
  background-color: #fff;
}

h1 {
  margin: 0;
}

.login {
  position: absolute;
  top: 0;
  right: 20px;
}
</style>
