<template>
  <div class="post-view">
    <div>
      <h1>{{ title }}</h1>
      <strong>ID: {{ id }} · {{ name }} · {{ createdAt }}</strong>
    </div>
    <p>{{ contents }}</p>
  </div>
</template>

<script>
export default {
  name: 'PostView',
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    createdAt: {
      type: String,
      required: true
    },
    contents: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.post-view > div {
  padding: 20px;
  text-align: left;
  font-size: 14px;
  border-bottom: 2px solid #868e96;
}
.post-view > div > h1 {
  font-size: 24px;
}
.post-view > div > span {
  display: block;
  margin-bottom: 2px;
  color: #868e96;
}
.post-view > div > strong {
  font-weight: normal;
  color: #868e96;
}
.post-view > p {
  margin-bottom: 20px;
  padding: 20px;
  text-align: left;
}
</style>
