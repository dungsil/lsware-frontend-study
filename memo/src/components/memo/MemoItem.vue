<template>
  <li class="memo-item">
    <strong>{{ memo.title }}</strong>
    <p @dblclick="dbClickEditMemo">
      <template v-if="!isEditing">{{ memo.content }}</template>
      <input v-else
             class="modify-input"
             type="text"
             ref="content"
             :value="memo.content"
             @keydown.enter="updateMemo"
      />
    </p>
    <button type="button" @click="deleteMemo">
      <i class="fas fa-times"></i>
    </button>
  </li>
</template>

<script>
export default {
  name: 'MemoItem',
  props: {
    memo: {
      type: Object
    },
    editingId: {
      type: Number
    }
  },
  data () {
    return {
      isEditing: false
    }
  },
  methods: {
    deleteMemo () {
      const id = this.memo.id
      this.$emit('delete', id)
    },
    dbClickEditMemo () {
      this.isEditing = true

      this.$nextTick(() => {
        this.$refs.content.focus() // 바로 입력가능하게 포커스 갱신해줌
      })
    },
    updateMemo ($) {
      const id = this.memo.id
      const content = $.target.value.trim()

      if (content.length < 1) {
        return false
      }

      this.$emit('modify', { id, content })
      this.isEditing = false
    }
  }
}
</script>

<style scoped>
.memo-item {
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
  padding: 24px;
  box-shadow: 0 4px 10px -4px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  list-style: none;
}
.memo-item input[type="text"] {
  font-size: inherit;
}
.memo-item button {
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 20px;
  background: none;
  color: #e5e5e5;
  border: 0;
  cursor: pointer;

  &:hover {
    color: #555;
  }
}
.memo-item strong {
  display: block;
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: normal;
  word-break: break-all;
}
.memo-item p {
  margin: 0;
  font-size: 14px;
  line-height: 22px;
  color: #666;
}
.memo-item p input[type="text"] {
  box-sizing: border-box;
  width: 100%;
  font-size: inherit;
}
.memo-item p input[type="text"] {
  box-sizing: border-box;
  width: 100%;
  font-size: inherit;
}

.modify-input {
  border: 1px solid #e5e5e5;
}
</style>
