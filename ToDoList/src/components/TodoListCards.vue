<script setup lang="ts">
import TodoGroup from './TodoGroup.vue';
import { TodoStatus } from '@/types/types';

</script>

<template>
    <div class="group-wrapper">
        <TodoGroup :status="TodoStatus.Pending"/>
        <TodoGroup :status="TodoStatus.Inprogress"/>
        <TodoGroup :status="TodoStatus.Completed"/>
    </div>
</template>

<style>
.group-wrapper {
    display: flex;
    justify-content:space-around;
    gap: 20px;
}
</style>