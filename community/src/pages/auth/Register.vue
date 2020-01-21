<template>
    <div id="signUp">
      <h2>회원가입</h2>

      <form @submit.prevent="onRegister">
        <label for="name">
          <input type="text" name="name" id="name" v-model="name" placeholder="아이디를 입력해주세요.">
        </label>

        <label for="email">
          <input type="email" name="email" id="email" v-model="email" placeholder="이메일을 입력해주세요.">
        </label>

        <label for="password">
          <input type="password" name="password" id="password" v-model="password" placeholder="비밀번호를 입력해주세요.">
        </label>

        <input type="submit" value="회원가입">
      </form>
      이미 가입하셨나요?
      <router-link to="/auth/login">로그인 하러가기</router-link>
    </div>
</template>

<script>
import http from '@/plugins/http'
export default {
  name: 'Register',
  data () {
    return {
      name: null,
      email: null,
      password: null
    }
  },
  methods: {
    onRegister () {
      const { name, email, password } = this
      http.post('/auth/signup', { name, email, password })
        .then(() => {
          alert('회원가입이 완료되었습니다.')
          this.$router.push({ name: 'Login' })
        })
        .catch((err) => alert(err.response.data.msg))
    }
  }
}
</script>

<style>
input:not([type="submit"]) {
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  margin-bottom: 8px;
  padding: 5px 12px;
  color: #495057;
  border: 1px solid
  #ced4da;
  border-radius: .25rem;
  font-size: 14px;
}
</style>
