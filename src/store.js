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
      const resp = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
      commit('setTodos', resp.data);
    },
    async filterTodos({ commit }, e) {
      //console.log(e);
      //Get Selected number
      const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
      const resp = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
      commit('setTodos', resp.data);
    },
    async addTodo({ commit }, title) {
      const resp = await axios.post('https://jsonplaceholder.typicode.com/todos', {
        title, 
        completed: false
      });
      commit('newTodo', resp.data);
    },
    async delTodo({commit}, id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      commit('removeTodo', id);
        //.then(res => this.todoData = this.todoData.filter(td => td.id != res.data.id));
    },
    async updateTodo({ commit }, upTodo) {
      const resp = await axios.put(`https://jsonplaceholder.typicode.com/todos/${upTodo.id}`, upTodo);
      //console.log(resp.data);
      commit('updateTodo', resp.data);
    }
  },
  mutations: {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos = state.todos.filter(t => t.id !== id),
    updateTodo: (state, upTodo) => {
      const index = state.todos.findIndex(t => t.id == upTodo.id);
      if(index !== -1){
        state.todos.splice(index, 1, upTodo);
      }
    }
  }
})
