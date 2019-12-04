export default {
  fetchMemos (state, memo) {
    state.memos = memo
  },
  addMemo (state, memo) {
    state.memos.push(memo)
  },
  modifyMemo (state, memo) {
    const i = state.memos.findIndex(v => v.id === memo.id)
    state.memos.splice(i, 1, { ...state.memos[i], content: memo.content })
  },
  deleteMemo (state, id) {
    const i = state.memos.findIndex(v => v.id === id)
    state.memos.splice(i, 1)
  }
}
