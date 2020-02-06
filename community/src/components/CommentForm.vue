<template>
  <div class="comment-form">
    <label for="comment">
      <textarea v-model="content" name="comment" id="comment" cols="30" rows="5" placeholder="댓글을 입력해주세요"></textarea>
      <button type="button" @click="onSubmit">등록</button>
    </label>
  </div>
</template>

<script>
export default {
  name: 'CommentForm',
  data () {
    return {
      content: ''
    }
  },
  methods: {
    onSubmit () {
      this.$emit('submit', this.content)
      this.content = ''
    }
  }
}
</script>

<style scoped>
button {
  border: none;
  border-radius: 5px;
}
.comment-form {
  position: relative;
  text-align: center;
  overflow: hidden;
}
.comment-form textarea {
  width: 86%;
  height: 60px;
  border: 1px solid #868e96;
  padding: 10px;
  font-size: 14px;
  box-sizing: border-box;
}
.comment-form button {
  height: 60px;
  width: 96px;
  background-color: #414141;
  color: #fff;
  font-size: 16px;
  vertical-align: text-bottom;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.comment-form button:hover {
  background-color: #181818;
}
.comments button {
  background-color: transparent;
  color: black;
  font-size: 12px;
  padding: 0;
  border-radius: 0;
  transition: opacity 0.3s ease-in-out;
  outline: 0;
}
</style>
