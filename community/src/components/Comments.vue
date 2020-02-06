<template>
  <ul class="comments">
    <li v-for="comment in comments" :key="comment.id">
      <div class="comment-item">
        <strong>{{ comment.user.name }}</strong>
        <span>{{ comment.createdAt }}</span>
        <p>{{ comment.contents }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Comments',
  props: {
    comments: {
      type: Array,
      required: true
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

.comments .comment-item {
  position: relative;
  overflow: hidden;
  padding: 20px;
  border-bottom: 1px solid #ced4da;
}
.comments .comment-item > strong {
  margin-right: 5px;
}
.comments .comment-item > span {
  font-size: 14px;
  vertical-align: bottom;
}
.comments .comment-item > p,
.comments .comment-item textarea,
.comments .comment-item textarea + button {
  margin-top: .5rem;
}
.comments .comment-item textarea {
  display: inline-block;
  border: 1px solid #868e96;
  width: 85%;
  padding: 10px;
  height: 60px;
  vertical-align: top;
  font-size: 14px;
}
.comments .comment-item textarea + button {
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
.comments .comment-item textarea + button:hover {
  background-color: #181818;
}
.comments .comment-item > ul {
  position: absolute;
  right: 0;
  top: 0;
  overflow: hidden;
}
.comments .comment-item > ul li {
  position: relative;
  float: left;
  padding: 0 10px 0 0;
  margin: 0 10px 0 0;
}
.comments .comment-item > ul li:after {
  position: absolute;
  right: 0;
  top: 2px;
  content: "|";
  color: #868e96;
}
.comments .comment-item > ul li:last-child {
  margin-right: 0;
  padding-right: 0;
}
.comments .comment-item > ul li:last-child:after {
  content: "";
}
.comments .comment-item > ul li button {
  color: #868e96;
}
.comments .comment-item > ul li button:hover {
  color: #2c3e50;
}
</style>
