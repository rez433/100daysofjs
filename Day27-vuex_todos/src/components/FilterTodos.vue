<template>
  <div>
    <select v-model="selected" @change="filterTodos(selected)">
      <option v-for="limit in limits"
       :value="limit"
       :key="limit"
      >
       {{ limit }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'FilterTodos',
  data() {
    return {
      selected: 200,
      limits: [200, 100, 50, 10, 5],
    };
  },
  methods: {
    ...mapActions(['filterTodos']),
  },

};
</script>
