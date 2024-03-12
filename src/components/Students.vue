<script>
import Client from '../../services/api'
export default {
  name: 'Students',
  data: () => ({
    listOfStudents: []
  }),
  methods: {
    async studentsList() {
      const response = await Client.get('/students')
      console.log(response.data)
      this.listOfStudents = response.data
    }
  },
  mounted: function () {
    // studentsList()
  }
}
</script>

<template>
  {{ studentsList() }}
</template>

<style></style>
