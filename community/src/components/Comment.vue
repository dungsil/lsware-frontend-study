<template>
  <div class="comment-item">
    <strong>{{ comment.user.name }}</strong>
    <span>{{ comment.createdAt }}</span>

    <div v-if="isModify">
      <textarea v-model="comment.contents" name="contents" id="contents" cols="28" rows="10" aria-label="수정하기"></textarea>
      <button @click="onSubmit">수정</button>
    </div>
    <p v-else>{{ comment.contents }}</p>

    <ul v-if="$store.state.info.id === comment.user.id">
      <li>
        <button v-if="isModify" @click="toggleChangeComment">수정 취소</button>
        <button v-else @click="toggleChangeComment">수정</button>
      </li>
      <li>
        <button>삭제</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      isModify: false
    }
  },
  methods: {
    toggleChangeComment () {
      this.isModify = !this.isModify
    },
    onSubmit () {
      this.$emit('changeComment', this.comment)
    }
  }
}
</script>

<style>
.comment-item {
  position: relative;
  overflow: hidden;
  padding: 20px;
  border-bottom: 1px solid #ced4da;
}
.comment-item > strong {
  margin-right: 5px;
}
.comment-item > span {
  font-size: 14px;
  vertical-align: bottom;
}
.comment-item > p,
.comment-item textarea,
.comment-item textarea + button {
  margin-top: .5rem;
}
.comment-item textarea {
  display: inline-block;
  border: 1px solid #868e96;
  width: 80%;
  padding: 10px;
  height: 60px;
  vertical-align: top;
  font-size: 14px;
}
.comment-item textarea + button {
  display: inline-block;
  border: 1px solid #666;
  padding: 10px;
  width: 14%;
  height: 60px;
  background-color: #414141;
  color: white;
  border-radius: .25rem;
  font-size: 1rem;
  transition: color .15s ease-in-out,
  background-color .15s ease-in-out,
  border-color .15s ease-in-out,
  box-shadow .15s ease-in-out;
}
.comment-item textarea + button:hover {
  background-color: #181818;
}
.comment-item > ul {
  list-style: none;
  position: absolute;
  right: 0;
  top: 0;
  overflow: hidden;
}
.comment-item > ul li {
  position: relative;
  float: left;
  padding: 0 10px 0 0;
  margin: 0 10px 0 0;
}
.comment-item > ul li:after {
  position: absolute;
  right: 0;
  top: 2px;
  content: "|";
  color: #868e96;
}
.comment-item > ul li:last-child {
  margin-right: 0;
  padding-right: 0;
}
.comment-item > ul li:last-child:after {
  content: "";
}
button {
  background-color: transparent;
  color: black;
  font-size: 12px;
  padding: 0;
  border: none;
  transition: opacity 0.3s ease-in-out;
  outline: 0;
}

.comment-item > ul li button {
  color: #868e96;
}
.comment-item > ul li button:hover {
  color: #2c3e50;
}
</style>
