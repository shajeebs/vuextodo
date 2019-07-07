<template>
  <div>
      <h3> Todos </h3>
      <div class="legend">
          <span>Double click to mark as completed</span>
          <span>
              <span class="incomplete"></span> = Incomplete
          </span>
          <span>
              <span class="complete"></span> = Complete
          </span>
      </div>
      <div class="todos">
          <div 
          @dblclick="onDblClick(todo)"
          v-for="todo in allTodos" 
          :key="todo.id" 
          class="todo"
          v-bind:class="{'is-complete':todo.completed}">
            {{todo.title}}
            <button @click="delTodo(todo.id)" class="del">x</button>
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "Todos",
    methods: {
        ...mapActions(["fetchTodos", "delTodo", "updateTodo"]),
        onDblClick(todo){
            const updTodo = {
                id: todo.id, title: todo.title, completed: !todo.completed
            }
            this.updateTodo(updTodo);
        }
    },
    computed: mapGetters(["allTodos"]),
    created(){
        this.fetchTodos();
    }
}
</script>

<style scoped>
    .todos {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
    }
    .todo {
        border: 2px solid brown;
        background: lightblue;
        padding: 1rem;
        border-radius: 5px;
        text-align:center;
        position: relative;
        cursor: pointer;
    }
    .del {
        background: red;
        color: yellow;
        border: none;
        padding:5px 9px;
        border-radius: 50%;
        cursor: pointer;
        float: right;
    }
    legend {
        display: flex;
        justify-content: space-around;
        margin-bottom: 1rem;
    }
    .is-complete {
        background:#35495e;
        color: #fff;
        text-decoration: line-through;
    }
    .complete {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #35495e;
    }
    .incomplete {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #41b883;
    }
    @media (max-width: 500px){
        .todos {
            grid-template-columns: 1fr; 
        }
    }
</style>
