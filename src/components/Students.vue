<script>
import Client from '../../services/api'
export default {
  name: 'Students',
  data: function () {
    return {
      listOfStudents: [],
      search: '',
      searchedStudents: []
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
    },
    navigateItem(id) {
      this.$router.push(`/students/${id}`)
    },
    handleChange(event) {
      this.search = event.target.value
      if (this.search.length > 0) {
        this.searchedStudents = this.listOfStudents.filter((student) =>
          student.name.includes(this.search)
        )
      } else {
        this.searchedStudents = []
      }
    }
  },
  mounted() {
    this.studentsList()
  }
}
</script>

<template>
  <div>
    <h3>Search Students</h3>
    <input type="text" name="search" :value="search" @input="handleChange" />
  </div>
  <div v-if="searchedStudents.length < 1">
    <div
      class="studentname"
      v-for="student in listOfStudents"
      :key="student._id"
    >
      <div @click="navigateItem(student._id)">
        <h3>Student Name: {{ student.name }}</h3>
        <h3 v-if="student.GPA">GPA: {{ student.GPA }}</h3>
      </div>
    </div>
  </div>
  <div v-else="searchedStudents">
    <div
      class="studentname"
      v-for="student in searchedStudents"
      :key="student._id"
    >
      <div @click="navigateItem(student._id)">
        <h3>Student Name: {{ student.name }}</h3>
        <h3>GPA: {{ student.GPA }}</h3>
      </div>
    </div>
  </div>
</template>

<style>
.studentname {
  padding: 5px;
}
.studentname:hover {
  color: blue;
  cursor: pointer;
}
</style>
