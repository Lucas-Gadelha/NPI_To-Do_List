<template>
    <v-container>
      <v-card class="pa-4">
        <v-text-field v-model="newTaskTitle" label="New Task" outlined></v-text-field>
        <v-btn @click="addTask" color="primary" class="mt-2">Add Task</v-btn>
  
        <v-list class="mt-4">
          <v-list-item v-for="task in tasks" :key="task.id">
            <v-list-item-content>
              <v-list-item-title>{{ task.title }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon @click="deleteTask(task.id)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>
    </v-container>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import api from '@/services/api'; // Importando a instância do Axios configurada
  
  interface Task {
    id: number;
    title: string;
  }
  
  export default defineComponent({
    setup() {
      const tasks = ref<Task[]>([]);
      const newTaskTitle = ref<string>('');
  
      // Função para buscar todas as tarefas da API
      const fetchTasks = async () => {
        try {
          const response = await api.get('/tasks');
          tasks.value = response.data;
        } catch (error) {
          console.error('Erro ao buscar tarefas:', error);
        }
      };
  
      // Função para adicionar uma nova tarefa
      const addTask = async () => {
        if (!newTaskTitle.value) return;
        try {
          const response = await api.post('/tasks', {
            title: newTaskTitle.value,
          });
          tasks.value.push(response.data);
          newTaskTitle.value = ''; // Limpar o campo após adicionar
        } catch (error) {
          console.error('Erro ao adicionar tarefa:', error);
        }
      };
  
      // Função para excluir uma tarefa
      const deleteTask = async (id: number) => {
        try {
          await api.delete(`/tasks/${id}`);
          tasks.value = tasks.value.filter(task => task.id !== id);
        } catch (error) {
          console.error('Erro ao deletar tarefa:', error);
        }
      };
  
      // Carregar tarefas ao montar o componente
      onMounted(fetchTasks);
  
      return {
        tasks,
        newTaskTitle,
        addTask,
        deleteTask,
      };
    },
  });
  </script>
  
  <style scoped>
  .pa-4 {
    padding: 16px;
  }
  </style>
  