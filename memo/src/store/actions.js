export function actionFetchMemos ({ commit }) {
  commit('fetchMemos', localStorage.memos ? JSON.parse(localStorage.memos) : [])
}

export function actionAddMemo({ commit }, payload) {
  commit('addMemo', payload)
}

export function actionModifyMemo({ commit }, payload) {
  commit('modifyMemo', payload)
}

export function actionDeleteMemo({ commit }, payload) {
  commit('deleteMemo', payload)
}

export default {
  actionFetchMemos,
  actionAddMemo,
  actionModifyMemo,
  actionDeleteMemo
}
