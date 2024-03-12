<script>
import Students from './components/Students.vue'
import NavBar from './components/NavBar.vue'
<<<<<<< HEAD
import CourseForm from './components/CourseForm.vue'
=======
>>>>>>> 0afa20cdfb89dd43ee1c9768037162fe019ee507
// import Client from './services/api.js'

export default {
  name: 'App',
<<<<<<< HEAD
  components: {
    Students,
    NavBar,
    CourseForm
  }
=======
  components: { Students, NavBar }
>>>>>>> 0afa20cdfb89dd43ee1c9768037162fe019ee507
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
