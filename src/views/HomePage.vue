<template>
    <div>
        <h1 class="todo__title">To-Do List</h1>
        <div class="todo__form">
            <AddTodo @add-todo="addToDo" />
            <FilterItem @filter-list="handleFilterList" ref="filter" />
        </div>
        <!-- List -->
        <div class="container">
            <div class="todo__list">
                <div v-for="(item, index) in listToShow" :key="index" class="todo">
                    <TodoItem :item="item" @toggle-status="toggleStatus" @delete-item="deleteItemTodo" />
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { useListTodo } from '../store'
import FilterItem from '../components/FilterItem.vue'
import AddTodo from '../components/AddTodo.vue'
import TodoItem from '../components/TodoItem.vue'
import { ref, onMounted, watch } from 'vue'
const store = useListTodo()
const listToDo = ref([])
const listToShow = ref([])
const idToDo = ref(0)
const selectStatusGeted = ref({ name: 'All' })
const addToDo = (content) => {
    if (!content.trim()) {
        alert('Please enter a valid todo item.');
        return;
    }
    else {
        const data = {
            id: idToDo.value,
            name: content,
            status: 'Uncompleted'
        }
        store.addTodo(data)
        idToDo.value++
    }
    handleFilterList(selectStatusGeted.value.name)

}

const toggleStatus = (id) => {
    store.toggleTodo(id)
    handleFilterList(selectStatusGeted.value.name)
}

const deleteItemTodo = (id) => {
    store.deleteTodo(id)
    handleFilterList(selectStatusGeted.value.name)
}

const handleFilterList = (category) => {
    selectStatusGeted.value.name = category
    listToShow.value = store.getItemByFilter(selectStatusGeted.value.name)
}

watch(() => store.listTodo, (x) => {
    handleFilterList(selectStatusGeted.value.name)
    localStorage.setItem('todos', JSON.stringify(x));
})

onMounted(() => {
    store.bindDataToList()
    listToShow.value = store.getAllListFromLocal
    if (listToShow.value.length > 0) {
        idToDo.value = listToShow.value[listToShow.value.length - 1].id + 1
    }
})


</script>