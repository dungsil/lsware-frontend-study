<template>
  <ul class="comments">
    <li v-for="comment in comments" :key="comment.id">
      <Comment :comment="comment" @changeComment="onChangeComment" />
    </li>
  </ul>
</template>

<script>
import Comment from './Comment'
import { mapActions } from 'vuex'

export default {
  name: 'Comments',
  components: { Comment },
  props: {
    comments: {
      type: Array,
      required: true
    }
  },
  methods: {
    ...mapActions(['editComment', 'deleteComment']),
    onChangeComment ({ id, comment }) {
      this.editComment({ commentId: id, comment })
        .catch((e) => {
          if (e.response.status === 401) {
            this.$router.push({ name: 'Login' })
          } else {
            alert(e.response.data.msg)
          }
        })
    }
  }
}
</script>

<style>
.comments {
  list-style: none;
  text-align: left;
  padding: 0;
  margin-top: 20px;
  border-top: 1px solid #ced4da;
}
</style>
