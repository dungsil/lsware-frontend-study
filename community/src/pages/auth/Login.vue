<template>
    <div id="login">
      <h2>로그인</h2>

      <form @submit.prevent="onLogin">
        <label for="email">
          <input id="email" type="text" v-model="email" placeholder="이메일을 입력해주세요" />
        </label>
        <label for="password">
          <input id="password" type="password" v-model="password" placeholder="비밀번호 를 입력해주세요" />
        </label>

        <input type="submit" value="로그인">
      </form>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onLogin () {
      const { email, password } = this
      console.log(email, password)
    }
  }
}
</script>
