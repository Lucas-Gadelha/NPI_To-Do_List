
<template>
  <v-app>
    <v-main>
      <TodoList />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoList from './components/ToDoList.vue';

export default defineComponent({
  components: {
    TodoList,
  },
});
</script>
