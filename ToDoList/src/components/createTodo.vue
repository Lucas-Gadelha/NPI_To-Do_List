<script setup lang="ts">

import { TodoStatus, type Todo } from "@/types"
import { reactive, ref } from 'vue';

const displayForm = ref(false);

const newTodo = reactive<Omit<Todo, "id">>({
    title: "",
    description: "",
    status: TodoStatus.Pending,
});

const resetForm () => {
    displayForm.value = false;
    newTodo.title = "";
    newTodo.description = "";
}
</script>

<template>
    <div>
        <h3 v-if="displayForm"> Adicionar tarefa</h3>
        <template v-else>
            <form>
                <div>
                    <input type="text" placeholder="Título" v-model="newTodo.title" />
                </div>
                <div>
                    <textarea type="text" placeholder="Título" v-model="newTodo.title" />
                </div>

                <button type="submit">Cadastrar</button>
                <button type="button" @click="resetForm">Cancelar</button>

                <div>
                    <input type="text" placeholder="Descrição">
                </div>
            </form>
        </template>
    </div>
</template>