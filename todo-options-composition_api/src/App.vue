<template>
  <nav>
        <router-link :to="route.path" v-for="route in routes" 
          :key="route.index">{{route.name}}</router-link> |

  </nav>
  <router-view/>
</template>
<script>
export default {

  data() {
    return {
      routes: [
        {
          name: 'Home ',
          path: '/'
          
        },
          {
          name: 'Options API ',
          path: '/options-api'
          
        },
          {
          name: 'Composition API ',
          path: '/composition-api'
          
        }
      ]
    }
  }

  // setup() {
    
  // },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
