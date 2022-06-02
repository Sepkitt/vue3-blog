<template>
    <div>
        <button @click="increment">Counter</button>
        <div class="counter">{{count}}</div>
        <div class="content">{{arrayOfEmojis}}</div>


    </div>
</template>

<!-- <script setup>
import {ref} from 'vue'

const count = ref(0)

</script> -->

<script >
import { watch, ref, onMounted, computed } from 'vue'

export default {

    props: {
        emoji: { type: String, default: '💩' }
    },



    setup(props) {
        onMounted(() => {
            console.log('Counter component has been mounted')
        })
        const count = ref(0)

        const increment = () => count.value++

        watch(count, current => {
            if (current === 5) console.log('You Clicked 5 times')
        })

        const arrayOfEmojis = computed(() => 
        Array.from(new Array(count.value), () => props.emoji).join(''))

        return {
            count,
            increment,
            arrayOfEmojis
        }
    }
}

</script>
<style lang="scss" scoped>
</style>