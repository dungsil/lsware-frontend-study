<template>
  <div class="memo-app">
    <MemoForm @add="addMemo" />
    <ul class="memo-list">
      <MemoItem v-for="memo in memos" :key="memo.id"
                :editing-id="memo.id" :memo="memo"
                @modify="modifyMemo" @delete="deleteMemo" />
    </ul>
  </div>
</template>

<script>
import MemoItem from './MemoItem'
import MemoForm from './MemoForm'
export default {
  name: 'Memo',
  components: {
    MemoForm,
    MemoItem
  },
  data () {
    return {
      memos: []
    }
  },
  created () {
    this.memos = localStorage.memos ? JSON.parse(localStorage.memos) : []
  },
  methods: {
    addMemo (payload) {
      this.memos.push(payload)
      this.storeMemo()
    },
    modifyMemo (payload) {
      const { id, content } = payload
      const idx = this.memos.findIndex(v => v.id === id)
      const memo = this.memos[idx]
      this.memos.splice(idx, 1, { ...memo, content })
      this.storeMemo()
    },
    deleteMemo (id) {
      const idx = this.memos.findIndex(v => v.id === id)
      this.memos.splice(idx, 1) // id 값을 배열에서 제거
      this.storeMemo()
    },
    storeMemo () {
      const str = JSON.stringify(this.memos)
      localStorage.setItem('memos', str)

      this.$emit('change', this.memos.length)
    }
  }
}
</script>

<style scoped>
.memo-list {
  padding: 20px 0;
  margin: 0;
}
</style>
