<template>
  <div id="post-detail" class="post-view-page">
    <PostView :id="post.id"
              :title="post.title"
              :name="post.user.name"
              :created-at="post.createdAt"
              :contents="post.contents" />

    <div class="post-view">
      <div style="text-align: right; border: none;">
        <router-link :to="{ name: 'PostEdit', params: { postId: post.id }}">수정</router-link>
        <button type="button" @onclick="onDelete">삭제</button>
        <router-link :to="{ name: 'Index' }">목록</router-link>
      </div>
    </div>

    <Comments :comments="post.comments" @changeComment="onChangeComment" />
    <CommentForm @submit="onCommentSubmit" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import http from '../../plugins/http'
import PostView from '../../components/PostView'
import Comments from '../../components/Comments'
import CommentForm from '../../components/CommentForm'

export default {
  name: 'PostDetail',
  components: { CommentForm, Comments, PostView },
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
    ...mapState(['post']),
    ...mapGetters(['isNotLogin'])
  },
  methods: {
    ...mapActions(['fetchPost', 'addComment']),
    onCommentSubmit (comment) {
      if (this.isNotLogin) {
        alert('로그인이 필요합니다.')
        this.$router.push({ name: 'Login' })
      } else {
        this.addComment(comment)
          .then(() => {})
          .catch((err) => alert(err.response.data.msg))
      }
    },
    onDelete () {
      console.log('k ha')
      http.delete(`/posts/${this.post.id}`)
        .then(() => {
          alert('게시글이 삭제되었습니다.')
          this.$router.push({ name: 'Index' })
        })
        .catch((err) => {
          alert(err.response.data.msg)

          if (err.response.status === 401) {
            this.$router.push({ name: 'Login' })
          }
        })
    },
    onChangeComment (payload) {
      console.log(payload)
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
</style>
