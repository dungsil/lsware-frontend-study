<template>
  <div class="memo-app">
    <MemoForm @add="onAdd" />
    <ul class="memo-list">
      <MemoItem v-for="memo in memos" :key="memo.id"
                :editing-id="memo.id" :memo="memo"
                @modify="onModify" @delete="onDelete" />
    </ul>
  </div>
</template>

<script>
import MemoItem from './MemoItem'
import MemoForm from './MemoForm'
import { mapActions } from 'vuex'
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
    this.actionFetchMemos()
    this.memos = this.$store.state.memos
    this.afterEvent()
  },
  methods: {
    onAdd (memo) {
      this.actionAddMemo(memo)
      this.afterEvent()
    },
    onModify (memo) {
      this.actionModifyMemo(memo)
      this.afterEvent()
    },
    onDelete (memo) {
      this.actionDeleteMemo(memo)
      this.afterEvent()
    },
    afterEvent () {
      const strMemos = JSON.stringify(this.memos)
      localStorage.setItem('memos', strMemos)
      this.$emit('change', this.memos.length)
    },
    ...mapActions(['actionFetchMemos', 'actionAddMemo', 'actionModifyMemo', 'actionDeleteMemo'])
  }
}
</script>

<style scoped>
.memo-list {
  padding: 20px 0;
  margin: 0;
}
</style>
