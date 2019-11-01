export default {
  fetchMemos (state, payload) {
    state.memos = payload
  },
  addMemo (state, payload) {
    state.memos.push(payload)
  }
}
