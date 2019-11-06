export default {
  fetchMemos (state, payload) {
    state.memos = payload
  },
  addMemo (state, payload) {
    state.memos.push(payload)
  },
  modifyMemo (state, payload) {
    const i = state.memos.findIndex(v => v.id === payload.id)
    state.memos.splice(i, 1, { ...state.memos[i], content: payload.content })
  },
  deleteMemo (state, payload) {
    const i = state.memos.findIndex(v => v.id === payload.id)
    state.memos.splice(i, 1)
  }
}
