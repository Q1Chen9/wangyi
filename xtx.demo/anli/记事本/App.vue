<template>
  <!-- 主体区域 -->
  <section id="app">
    <TodoHeader @add="handleAdd"></TodoHeader>
    <TodoMain :list="list" @del="handleDel"></TodoMain>
    <TodoFooter :list="list" @clear="clear"></TodoFooter>
  </section>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter
  },
  data () {
    return {
      list: JSON.parse(localStorage.getItem('list')) || [
        {id: 1, name: "打篮球"},
        {id: 2, name: "看电影"},
        {id: 3, name: "逛街"},
      ]
    }
  },
  methods: {
    handleDel(id) {
      this.list = this.list.filter((item) => item.id !== id)
    },
    handleAdd(todoName) {
      this.list.unshift({
      id: +new Date(),
      name: todoName
      })
    },
    clear() {
      this.list = []
    }
  },
  watch: {
    list: {
      deep: true,
      handler(newVal) {
        localStorage.setItem('list', JSON.stringify(newVal))
      }
    }
  }
}
</script>

<style>

</style>
