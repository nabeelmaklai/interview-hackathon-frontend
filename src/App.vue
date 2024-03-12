<script>
import Students from './components/Students.vue'
import NavBar from './components/NavBar.vue'
// import Client from './services/api.js'

export default {
  name: 'App',
  components: { Students, NavBar }
}
</script>

<template>
  <div>
    <h1>The School App</h1>
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
