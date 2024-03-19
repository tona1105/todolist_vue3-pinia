<template>
    <div class="item__content" :class="{ 'line-though': item.status === 'Completed' }">
        {{ item.name }}
    </div>
    <div class="item__option">
        <i class="pi pi-check" @click="emitToggleStatus(item.id)"></i>
        <i class="pi pi-trash" @click="emitDeleteItem(item.id)"></i>
    </div>
</template>

<script setup>
import { defineProps, defineEmits  } from 'vue';

const props = defineProps({
    item: Object
});

// Get the current component instance
const emits = defineEmits(['toggleStatus', 'deleteItem']);
// Define methods to emit events
const emitToggleStatus = (id) => {
    emits('toggleStatus', id);
};

const emitDeleteItem = (id) => {
    emits('deleteItem', id);
};
</script>