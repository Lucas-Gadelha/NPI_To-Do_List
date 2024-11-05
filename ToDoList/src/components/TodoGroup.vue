<script setup lang="ts">

import useTodo from '@/store/useTodo';
import { TodoStatus} from '@/types';
import Draggable from 'vuedraggable';
import createTodo from './createTodo.vue'; 

interface Props {
    status: TodoStatus;
};

const props = defineProps<Props>();

const { getTodoByStatus, deleteTodo } = useTodo();
const todoList = getTodoByStatus(props.status);

const groupLabel = {
    [TodoStatus.Pending]: "Pending",
    [TodoStatus.Inprogress]: "In Progress",
    [TodoStatus.Completed]: "Completed",
}

</script>

<template>
    <div class="groups-wrapper">
        <h3> {{ groupLabel[props.status] }} </h3>
        
        <!-- <Draggable class="draggable" :list="todoList" group="todos" itemKey="id">
            <template #item="{ element: todo }">
                <li>
                    {{ todo.title }}
                    <span class="deleteItem" @click="deleteTodo(todo)"> X </span>
                    <span class="todo-description">{{ todo.description }}</span>
                </li>
            </template>
        </Draggable> -->
        <ul>
            <li v-for="todo in todoList" key="id">
                {{ todo.title }}
                <span class="todo-description">{{ todo.description }}</span>
                <span class="deleteItem" @click="deleteTodo(todo)"> X </span>
            </li>
        </ul>

        <createTodo :status="props.status"/>
        
    </div>
</template>

<style scoped>

.groups-wrapper {
    flex: 1;
    padding: 20px;
    background-color: rgb(54, 65, 61);
    border-radius: 5px;
    margin-top: 20px;
}
.groups-wrapper ul {
    padding: 0;
}
.groups-wrapper li {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 5px 5px;
    cursor: grab;
    background-color: rgb(79, 185, 146);
    color: rgb(26, 29, 28);
    margin-bottom: 5px;
    border-radius: 5px;
}
.todo-description {
    font-size: 12px;
}
.draggable {
    min-height: 200px;
}

.deleteItem {
    color: red;
    background-color: rgb(54, 65, 61);
    font-size: 15px;
    cursor: pointer;
}
</style>