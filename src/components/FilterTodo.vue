<template>
  <div>
      Filter Todo:
      <select @change="filterTodos($event)">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
      </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "FilterTodo",
    methods: mapActions(["filterTodos"])
}
</script>

<style>
    select {
        margin-top: 20px;
        padding:6px;
        border: 1px solid #41b883;
    }
</style>
