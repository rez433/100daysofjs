<template>
  <div>
    <h3>Todos</h3>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span>
        <span class="incomplete"></span> = Incomplete
      </span>
      <span>
        <span class="complete"></span> = Complete
      </span>
    </div>
    <div class="todos">
      <div @dblclick="onDblClick(todo)"
        v-for="todo in allTodos"
        :key="todo.id"
        class="todo"
        :class="{'is-complete':todo.completed}"
      >
        {{todo.title}}
        <span class="del" @click="delTodo(todo.id)"> X </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
// import { mapActions } from 'vuex';

export default {
  name: 'Todos',
  methods: {
    ...mapActions(['fetchTodos', 'delTodo', 'updateTodo']),
    onDblClick(todo) {
      const upd8Todo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };
      this.updateTodo(upd8Todo);
    },
  },
  computed: mapGetters(['allTodos']),
  created() {
    this.fetchTodos();
  },
};
</script>

<style scoped>
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: .5rem;
  position: relative;
  text-align: center;
  cursor: pointer;
}
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.del {
  position: absolute;
  right: .5rem;
  color: red;
  border: 1px solid grey;
  padding: 2px;
  border-radius: 50%;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background: #35495e;
}
.incomplete {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background: #41b883;
}
.is-complete {
  background: #35495e;
}
@media only screen and (min-width: 501px) and (max-width: 768px) {
  .todos {
    grid-template-columns: 2fr;
  }
}
@media only screen and (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
