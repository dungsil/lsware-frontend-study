<template>
  <div id="index">
    <div class="list">
      <h2>게시글 목록</h2>
      <table>
        <colgroup>
          <col style="width: 10%">
          <col style="width: 50%">
          <col style="width: 20%">
          <col style="width: 20%">

        </colgroup>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
        </tr>
        <tr v-for="(i, v) in posts" :key="i">
          <td>{{ i }}</td>
          <td>{{ v.title }}</td>
          <td>{{ v.author }}</td>
          <td>{{ v.createdAt }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      posts: []
    }
  }
}
</script>

<style scoped>
.list {
  width: 940px;
  margin: 60px auto 0;
  padding: 40px 30px 60px;
  background-color: #fff;
  box-shadow: 0 4px 10px -4px rgba(0, 0, 0, 0.2);
}

.list h2 {
  margin-bottom: 20px;
  text-align: left;
  font-size: 24px;
}

table {
  width: 100%;
}
</style>
