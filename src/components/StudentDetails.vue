<script>
import Client from '../../services/api'
export default {
  name: 'StudentDetails',
  data: function () {
    return {
      student: null
    }
  },
  methods: {
    async studentInfo() {
      try {
        const id = this.$route.params.id
        const response = await Client.get(`/students/${id}`)
        this.student = response.data
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted() {
    this.studentInfo()
  }
}
</script>

<template>
  <h3>{{ student.name }}</h3>
</template>

<style></style>
