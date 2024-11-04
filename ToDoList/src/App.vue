<script lang="ts">
import { defineComponent } from 'vue';
import TodoList from './components/TodoList.vue';


export default defineComponent({
  components: {
    TodoList,
  },
});
</script>

<template>
  <v-app>
    <v-main>
      <TodoList />
    </v-main>
  </v-app>
</template>
