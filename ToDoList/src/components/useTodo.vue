<script lang="ts">
import { ref } from "vue";
import api from "@/services/api";
import { Todo } from "@/types/types";

export function useTodos() {
  const todos = ref<Todo[]>([]);
  const error = ref<string | null>(null);
  const loading = ref(false);

  // Função para gerar um ID aleatório
  const generateRandomId = () => Math.floor(Math.random() * 100000);

  // Função para listar todas as Todos
  const fetchTodos = async () => {
    loading.value = true;
    try {
      const response = await api.get<Todo[]>("/api/todos");
      todos.value = response.data;
    } catch (err) {
      error.value = "Erro ao buscar Todos.";
    } finally {
      loading.value = false;
    }
  };

  // Função para criar uma nova Todo com ID aleatório
  const createNewTodo = async (todo: Omit<Todo, "id">) => {
    loading.value = true;
    try {
      const todoWithId = { ...todo, id: generateRandomId() }; // Atribui um ID aleatório
      await api.post("/api/todos", todoWithId);
      await fetchTodos(); // Atualiza a lista após criação
    } catch (err) {
      error.value = "Erro ao criar Todo.";
    } finally {
      loading.value = false;
    }
  };

  // Funções para atualizar e deletar permanecem iguais
  const updateExistingTodo = async (id: number, updatedTodo: Todo) => {
    loading.value = true;
    try {
      await api.put(`/api/todos/${id}`, updatedTodo);
      await fetchTodos();
    } catch (err) {
      error.value = "Erro ao atualizar a Todo.";
    } finally {
      loading.value = false;
    }
  };

  const deleteExistingTodo = async (id: number) => {
    loading.value = true;
    try {
      await api.delete(`/api/todos/${id}`);
      await fetchTodos();
    } catch (err) {
      error.value = "Erro ao excluir a Todo.";
    } finally {
      loading.value = false;
    }
  };

  return {
    todos,
    error,
    loading,
    fetchTodos,
    createNewTodo,
    updateExistingTodo,
    deleteExistingTodo,
  };
};
</script>