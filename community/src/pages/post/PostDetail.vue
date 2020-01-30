<template>
  <div id="post-detail" class="post-view-page">
    <div class="post-view">
      <div>
        <h1>{{ post.title }}</h1>
        <strong>ID: {{ post.id }} · {{ post.user.name }} · {{ post.createdAt }}</strong>
      </div>
      <p>{{ post.contents }}</p>

      <div style="text-align: right; border: none;">
        <router-link :to="{ name: 'PostEdit', params: { postId: post.id }}">수정</router-link>
        <button @onclick="onDelete">삭제</button>
        <router-link :to="{ name: 'Index' }">목록</router-link>
      </div>
    </div>

    <ul class="comments">
      <li v-for="comment in post.comments" :key="comment.id">
        <div class="comment-item">
          <strong>{{ comment.user.name }}</strong>
          <span>{{ comment.createdAt }}</span>
          <p>{{ comment.contents }}</p>
        </div>
      </li>
    </ul>

    <div class="comment-form">
      <label for="comment">
        <textarea name="comment" id="comment" cols="30" row="5" placeholder="댓글을 입력해주세요"></textarea>
        <button type="button">등록</button>
      </label>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'PostDetail',
  props: {
    postId: {
      type: String,
      required: true
    }
  },
  created () {
    this.fetchPost(this.postId)
      .catch(err => {
        alert(err.response.data.msg)
        this.$router.back()
      })
  },
  computed: {
    ...mapState(['post'])
  },
  methods: {
    ...mapActions(['fetchPost']),
    onDelete () {

    }
  }
}
</script>

<style scoped>
button {
  padding: 0;
  border: 0;
  font: inherit;
}
.post-view-page h1 {
  margin-bottom: 12px;
  text-align: left;
  font-size: 24px;
}
.post-view-page > p {
  text-align: center;
  margin: 1rem 0;
}
.post-view-page .post-view > div {
  padding: 20px;
  text-align: left;
  font-size: 14px;
  border-bottom: 2px solid #868e96;
}
.post-view-page .post-view > div > h1 {
  font-size: 24px;
}
.post-view-page .post-view > div > span {
  display: block;
  margin-bottom: 2px;
  color: #868e96;
}
.post-view-page .post-view > div > strong {
  font-weight: normal;
  color: #868e96;
}
.post-view-page .post-view > p {
  margin-bottom: 20px;
  padding: 20px;
  text-align: left;
}
.post-view-page a, .post-view-page button {
  display: inline-block;
  padding: .5rem 1.75rem;
  background-color: #414141;
  border-radius: .25rem;
  color: #fff;
  text-decoration: none;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.post-view-page > a:hover, .post-view-page > button:hover {
  background-color: #181818;
}
.post-view-page > ul {
  text-align: left;
  padding: 0;
  margin-top: 20px;
  border-top: 1px solid #ced4da;
}
.post-view-page > ul > li {
  overflow: hidden;
  padding: 20px;
  border-bottom: 1px solid #ced4da;
}
.post-view-page > .comments .comment-item {
  position: relative;
}
.post-view-page > .comments .comment-item > strong {
  margin-right: 5px;
}
.post-view-page > .comments .comment-item > span {
  font-size: 14px;
  vertical-align: bottom;
}
.post-view-page > .comments .comment-item > p,
.post-view-page > .comments .comment-item textarea,
.post-view-page > .comments .comment-item textarea + button {
  margin-top: .5rem;
}
.post-view-page > .comments .comment-item textarea {
  display: inline-block;
  border: 1px solid #868e96;
  width: 85%;
  padding: 10px;
  height: 60px;
  vertical-align: top;
  font-size: 14px;
}
.post-view-page > .comments .comment-item textarea + button {
  display: inline-block;
  border: 1px solid #666;
  padding: 10px;
  width: 14%;
  height: 60px;
  background-color: #414141;
  color: white;
  border-radius: .25rem;
  font-size: 1rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.post-view-page > .comments .comment-item textarea + button:hover {
  background-color: #181818;
}
.post-view-page > .comments .comment-item > ul {
  position: absolute;
  right: 0;
  top: 0;
  overflow: hidden;
}
.post-view-page > .comments .comment-item > ul li {
  position: relative;
  float: left;
  padding: 0 10px 0 0;
  margin: 0 10px 0 0;
}
.post-view-page > .comments .comment-item > ul li:after {
  position: absolute;
  right: 0;
  top: 2px;
  content: "|";
  color: #868e96;
}
.post-view-page > .comments .comment-item > ul li:last-child {
  margin-right: 0;
  padding-right: 0;
}
.post-view-page > .comments .comment-item > ul li:last-child:after {
  content: "";
}
.post-view-page > .comments .comment-item > ul li button {
  color: #868e96;
}
.post-view-page > .comments .comment-item > ul li button:hover {
  color: #2c3e50;
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
