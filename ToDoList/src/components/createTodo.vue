<script setup lang="ts">
const displayForm = ref(false);
</script>

<template>
    <div>
        <h3 v-if="displayForm"> Adicionar tarefa</h3>
        <template v-else>
            <form>
                <div>
                    <input type="text" placeholder="Título">
                </div>
                <div>
                    <input type="text" placeholder="Descrição">
                </div>
            </form>
        </template>
    </div>
</template>