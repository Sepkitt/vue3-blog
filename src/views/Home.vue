<template>
    <div class="Home">
        <h1>Home</h1>
       <p ref="p"> My name is {{name}} and I am {{age}} years old</p>
    </div>

    <button @click="handleClick">Click me</button>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    name: 'Home',
    setup () {

        const p = ref(null)

        let name = 'Mario'
        let age = 30
        
        const handleClick = (() => {
            console.log(p, p.value)
            p.value.classList.add('test')
            p.value.textContent = "Hello, Ninjas"
        })
        

        return { name, age, handleClick, p}
    }
}
</script>

<style lang="scss" scoped>

</style>