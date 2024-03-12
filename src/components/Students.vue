<script>
import Client from '../../services/api'
export default {
  name: 'Students',
  data: function () {
    return {
      listOfStudents: []
    }
  },
  methods: {
    async studentsList() {
      try {
        const response = await Client.get('/students')
        this.listOfStudents = response.data
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted() {
    this.studentsList()
  }
}
</script>

<template>
  <!-- <h3>{{ listOfStudents }}</h3> -->
  <div v-for="student in listOfStudents">
    <h3>{{ student.name }}</h3>
    <h3>{{ student.email }}</h3>
    <h3>{{ student.studentId }}</h3>
  </div>
</template>

<style></style>
