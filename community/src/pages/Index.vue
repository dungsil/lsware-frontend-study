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
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(v, i) in posts" :key="v.id" class="post">
            <td>{{ i + 1 }}</td>
            <td class="post-title">
              <router-link :to="getPostLink(v.id)">{{ v.title }}</router-link>
              [{{ v.comments.length }}]
            </td>
            <td>{{ v.user.name }}</td>
            <td>{{ v.createdAt }}</td>
          </tr>
        </tbody>
      </table>
      <router-link to="/post/write" class="button__write_post">글쓰기</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Index',
  data () {
    return {
      posts: []
    }
  },
  async mounted () {
    const res = await axios.get('http://localhost:8000/api/posts')

    if (res.status === 200) {
      this.posts = res.data
    } else {
      alert(`[${res.status}] 데이터 로딩에 실패하였습니다.`)
    }
  },
  methods: {
    getPostLink (id) {
      return `posts/${id}`
    }
  }
}
</script>

<style scoped>
table {
  width: 100%;
}

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

.list thead {
  background-color: rgb(136, 136, 136);
  font-size: 14px;
  color: #fff;
}

.list th {
  position: relative;
  padding: 10px;
  margin: 0;
  border: none;
  border-collapse: collapse;
}

.post td {
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #ededed;
}

.post .post-title {
  text-align: left;
}

.button__write_post {
  float: right;
  margin-top: 13px;
  padding: .5rem 1.75rem;
  border-radius: .25rem;
  background-color: #181818;
  color: #fff;
  text-decoration: none;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
</style>
