<template>
    <div class="composition-api">
        <h1>Composition API</h1>

        <div class="container">
            <div class="row">
                <h3>You have {{ todosCount }} todos</h3>

                <div class="col">
                    <input
                        v-model="data.newTodo"
                        @keyup.enter="addTodo"
                        type="text"
                        placeholder="Add Todo"
                    />
                </div>

                <div class="col">
                    <ul v-for="(todo, index) in data.todos" :key="index">
                        <li>
                            <span>{{ todo.name }}</span>
                            <button @click="deleteTodo(index)">X</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { reactive, computed, watch } from 'vue'

export default {
    name: 'composition-api',

    setup() {
        // let newTodo = ref('')
        // let todos = ref([])

        let data = reactive({
          newTodo : '',
          todos : []
        })
        const swearWords = ['butt face', 'willy', 'fart', 'hairy toe']

        let todosCount = computed(() => {
          return data.todos.length
        })

        function addTodo() {
            let addTodo = {
                id:Date.now(),
                name: data.newTodo
            }
            data.todos.push(addTodo)
            data.newTodo = ''
        }
        function deleteTodo(index) {
          data.todos.splice(index, 1)
        }

        watch(data, (newValue) => {
            if(swearWords.includes(newValue.newTodo.toLowerCase())) {
                alert(`You must NEVER say ${newValue.newTodo} `)
                 data.newTodo = ''
            }
        })
        return {
          //data
            // newTodo,
            // todos,
            data,
          //computed
            todosCount,

          //methods
            addTodo,
            deleteTodo
        }
    },
 
}
</script>
