<template>
    <div class="todo__add">
        <InputText type="text" v-model="contentToDo" style="margin-right: 10px;" class="todo__add--input" required
            @keydown.enter="handleAddTodo" />
        <i class="pi pi-plus todo__add--button" @click="handleAddTodo"></i>
    </div>
</template>

<script setup>
import InputText from 'primevue/inputtext'
import {defineModel, defineEmits} from 'vue'
const contentToDo = defineModel()
const emit = defineEmits(['addTodo'])
const handleAddTodo = () => {
    emit('addTodo',contentToDo.value)
    contentToDo.value = ''
}
</script>