export default {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos = state.todos.filter(t => t.id !== id),
    updateTodo: (state, upTodo) => {
      const index = state.todos.findIndex(t => t.id == upTodo.id);
      if(index !== -1){
        state.todos.splice(index, 1, upTodo);
      }
    },
    appendPet: (state, { species, pet }) => { 
        state[species + 's'].push(pet)
    }
}