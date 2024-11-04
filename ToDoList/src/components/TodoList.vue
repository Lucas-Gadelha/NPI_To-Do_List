<script setup lang="ts">
import TodoGroup from './TodoGroup.vue';
import { TodoStatus } from '@/types';

</script>

<template>
    <div>
        <TodoGroup :status="TodoStatus.Pending"/>
        <TodoGroup :status="TodoStatus.Inprogress"/>
        <TodoGroup :status="TodoStatus.Completed"/>
    </div>
</template>

<style>
</style>