<script setup lang="ts">

import { computed } from 'vue';
import useTodo from '@/store/useTodo';
import { TodoStatus} from '@/types';

interface Props {
    status: TodoStatus;
};

const props = defineProps<Props>();

const { getTodoByStatus } = useTodo();
const todoList = getTodoByStatus(props.status);

const groupLabel = {
    [TodoStatus.Pending]: "Pending",
    [TodoStatus.Inprogress]: "In Progress",
    [TodoStatus.Completed]: "Completed",
}

</script>

<template>
    <div>
        <h3> {{ groupLabel[props.status] }} </h3>
        <ul>
            <li v-for="todo in todoList" :key="todo.id">{{ todo.title }}</li>
        </ul>

    </div>
</template>

<style></style>