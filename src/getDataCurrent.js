import {ref} from 'vue'
export const getDataToDoCurrent = () => {
    const listToDo = ref([])
    const idToDo = ref(0)
    const todos = localStorage.getItem('todos');
    if (todos) {
        const parsedTodos = JSON.parse(todos);
        listToDo.value = parsedTodos;
        idToDo.value = parsedTodos.length > 0 ? parsedTodos[parsedTodos.length - 1].id + 1 : 0;
    }
    window.onstorage = () => {
        // When local storage changes, dump the list to
        // the console.
        console.log(JSON.parse(window.localStorage.getItem("sampleList")));
      }
    return {
        listToDo,
        idToDo
    };
};