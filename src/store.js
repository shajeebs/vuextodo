import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [] // todos: [ { id:1, title: "Todo One", completed: false },  ]
  },
  getters: {
    allTodos: (state) => state.todos
  },
  actions: {
    async fetchTodos({ commit }) {
      const resp = await axios.get('https://jsonplaceholder.typicode.com/todos');
      commit('setTodos', resp.data);
    },
    async addTodo({ commit }, title) {
      const resp = await axios.post('https://jsonplaceholder.typicode.com/todos', {
        title, 
        completed: false
      });
      commit('newTodo', resp.data);
    }
  },
  mutations: {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo)
  }
})
