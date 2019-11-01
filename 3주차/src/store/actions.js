export function fetchMemos ({ commit }) {
  commit('fetchMemos', localStorage.memos ? JSON.parse(localStorage.memos) : [])
}

export function addMemo({ commit }, payload) {
  localStorage.setItem('memos', payload)
  commit('addMemo', payload)
}

export default {
  fetchMemos,
  addMemo
}
