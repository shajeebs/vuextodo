<template>
  <div class="container">
    <AddTodo />
    <Todos />
  </div>
</template>

<script>
// @ is an alias to /src
import Todos from '@/components/Todos.vue'
import AddTodo from '@/components/AddTodo.vue'

export default {
  name: 'todos',
  components: {
    Todos,
    AddTodo
  }
}
</script>
