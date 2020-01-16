<template>
    <div id="login">
      <h2>로그인</h2>

      <form @submit.prevent="onLogin">
        <label for="email">
          <input id="email" type="email" v-model="email" placeholder="이메일을 입력해주세요" />
        </label>
        <label for="password">
          <input id="password" type="password" v-model="password" placeholder="비밀번호를 입력해주세요" />
        </label>

        <input type="submit" value="로그인">
      </form>
      <p>
        회원이 아니신가요?
        <router-link to="/auth/register">
          회원가입 하러가기
        </router-link>
      </p>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    onLogin () {
      const { email, password } = this

      this.login({ email, password })
        .then(() => this.$router.push({ name: 'Index' }))
        .catch(err => alert(err.response.data.msg))
    }
  }
}
</script>

<style>
#login {
  text-align: center;
}

form {
  width: 50%;
  margin: 0 auto;
}

input:not([type=submit]) {
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  margin-bottom: 8px;
  padding: 5px 12px;
  color: #495057;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  font-size: 14px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  margin-bottom: 8px;
  padding: .75rem;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  border-radius: .25rem;
  background-color: #414141;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
</style>
