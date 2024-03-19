import { defineStore } from 'pinia'
export const useListTodo = defineStore({
    id: 'list',
    state: () => ({
        listTodo: []
    }),
    actions: {
        bindDataToList() {
            const todos = localStorage.getItem('todos');
            if (todos) {
                this.listTodo = JSON.parse(todos)
            }
            console.log(this.listTodo);
        },
        addTodo(data) {
            this.listTodo.push(data)
            localStorage.setItem('todos', JSON.stringify(this.listTodo));
        },
        deleteTodo(id) {
            this.listTodo = this.listTodo.filter(item => item.id !== id);
        },
        toggleTodo(id) {
            for (let i in this.listTodo) {
                if (this.listTodo[i].id === id) {
                    if (this.listTodo[i].status === 'Uncompleted') this.listTodo[i].status = 'Completed'
                    else this.listTodo[i].status = 'Uncompleted'
                }
            }
            localStorage.setItem('todos', JSON.stringify(this.listTodo));
        }
    },
    getters: {
        getAllListFromLocal: (state) => {
            const todos = localStorage.getItem('todos');
            if (todos) {
                state.listTodo = JSON.parse(todos)
                return state.listTodo
            }
            else return []
        },
        getItemByFilter: (state) => (category) => {
            if (category === 'All') return state.listTodo
            else {
                const listFilter = state.listTodo.filter(item => item.status === category)
                return listFilter
            }
        },

    }
})