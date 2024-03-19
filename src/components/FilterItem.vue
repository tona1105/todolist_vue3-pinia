<template>
    <div class="todo__filter">
        <Dropdown v-model="selectStatus" :options="status" optionLabel="name" placeholder="All"
            class="w-full md:w-14rem title__select" @change="callHandleFilterList" />
    </div>
</template>

<script setup>
import Dropdown from 'primevue/dropdown'
import {defineEmits, ref, defineExpose} from 'vue'
const selectStatus = ref({ name: 'All' })
const status = ref([
    { name: 'All' },
    { name: 'Completed' },
    { name: 'Uncompleted' }
])
const emit = defineEmits(['filterList'])
const callHandleFilterList = () => {
    emit('filterList',selectStatus.value.name)
}
defineExpose({selectStatus})
</script>