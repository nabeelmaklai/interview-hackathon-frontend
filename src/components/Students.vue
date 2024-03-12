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
      } catch (error) {
        console.log(error)
      }
    },
    navigateItem(id) {
      this.$router.push(`/students/${id}`)
    }
  },
  mounted() {
    this.studentsList()
  }
}
</script>

<template>
  <div v-for="student in listOfStudents" :key="student._id">
    <div @click="navigateItem(student._id)">
      <h3>{{ student.name }}</h3>
    </div>
  </div>
</template>

<style></style>
