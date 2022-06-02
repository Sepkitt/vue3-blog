<template>
    <div class="options-api">
        <h1>Options API</h1>

        


        <div class="container">
            <div class="row">
                <h3>You have {{todosCount}} todos</h3>

                <div class="col">
                    <input v-model="newTodo" @keyup.enter="addTodo" type="text" placeholder="Add Todo" />
                </div>

                <div class="col">
                    <ul v-for="(todo, index) in todos" :key="index">

                  
                        <li>
                            <span>{{todo.name}}</span>
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


export default {
    name: 'options-api',
    data() {
        return {
            newTodo: '',
          todos: [
       
          ],
          swearWords: [
              'butt face',
              'willy',
              'hairy toe'
          ]
        }
    },
    computed: {
        todosCount() {
            return this.todos.length
        }
    },

    methods: {
        addTodo() {
            let addTodo = {
                id:Date.now(),
                name: this.newTodo
            }
            this.todos.push(addTodo)
            this.newTodo = ''

        },
        deleteTodo(index) {
            this.todos.splice(index, 1)
        }
    },
    watch: {
        newTodo(newValue) {
            console.log('newValue: ', newValue)
            if(this.swearWords.includes(newValue.toLowerCase())) {
                this.newTodo = ''
                alert(`You must NEVER say ${newValue} `)
            }
        }
    }
}
</script>
