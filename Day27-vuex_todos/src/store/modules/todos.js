/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import axios from 'axios';

const getters = {
  allTodos: (state) => state.todos,
};

const state = {
  todos: [],
};

const actions = {
  async fetchTodos({ commit }) {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    commit('setTodos', res.data);
  },
  async addTodo({ commit }, title) {
    const res = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false });
    commit('newTodo', res.data);
  },
  async delTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit('removeTodo', id);
  },
  async filterTodos({ commit }, limit) {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/?_limit=${limit}`);
    commit('setTodos', res.data);
  },
  async updateTodo({ commit }, upd8Todo) {
    const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${upd8Todo.id}`, upd8Todo);
    commit('updateTodo', res.data);
  },
};

const mutations = {
  setTodos: (state, todos) => {
    (state.todos = todos);
  },
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) => {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  },
  updateTodo: (state, updateTodo) => {
    const index = state.todos.findIndex((todo) => todo.id === updateTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updateTodo);
    }
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
