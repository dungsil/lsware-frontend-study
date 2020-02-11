<template>
  <ul class="comments">
    <li v-for="comment in comments" :key="comment.id">
      <Comment :comment="comment" @changeComment="onChangeComment" />
    </li>
  </ul>
</template>

<script>
import Comment from './Comment'
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
    onChangeComment (data) {
      this.$emit('changeComment', data)
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
