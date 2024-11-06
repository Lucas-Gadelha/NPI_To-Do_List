<script setup lang="ts">

import type { TodoStatus, Todo } from "@/components/types"
import { reactive, ref } from 'vue';

import useTodo from "@/store/useTodo";

const displayForm = ref(false);
const { addNewTodo } = useTodo();

interface Props {
    status: TodoStatus;
};

const props = defineProps<Props>();

const newTodo = reactive<Omit<Todo, "id">>({
    title: "",
    description: "",
    status: props.status,
});

const resetForm = () => {
    displayForm.value = false;
    newTodo.title = "";
    newTodo.description = "";
}

const handleOnSubmit = () => {
    addNewTodo({
        // capturar o id da api
    id: Math.random() * 100000000000,
    ...newTodo});

    resetForm();
}
</script>

<template>
    <div>
        <h3 v-if="!displayForm" @click="displayForm = !displayForm"> Adicionar tarefa</h3>
        <template v-else>
            <form @submit.prevent="handleOnSubmit">
                <div>
                    <input type="text" placeholder="Título" v-model="newTodo.title" />
                </div>
                <div>
                    <input type="text" placeholder="Descrição" v-model="newTodo.description">
                </div>
                <button type="submit">Cadastrar</button>
                <button type="button" @click="resetForm">Cancelar</button>
            </form>
        </template>
    </div>
</template>
