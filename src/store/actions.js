import axios from 'axios'

export default {
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
    },
    addPet: ({ commit }, payload) => { //commit param comes from UX, pet is the custom parameter
        commit('appendPet', payload)  //{ pet, species } =payload.pet, payload.species
    }
};