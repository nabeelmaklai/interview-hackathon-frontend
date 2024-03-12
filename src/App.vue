<script>
import Students from './components/Students.vue'
// import Client from './services/api.js'

export default {
  name: 'App',
  components: { Students }
}
</script>

<template>
  <div>
    <Students />
    <h1>My New Vue App</h1>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
