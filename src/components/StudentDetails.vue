<script>
import Client from '../../services/api'

export default {
  name: 'StudentDetails',
  data() {
    return {
      student: null,
      courses: [],
      grades: [0, 1, 2, 3, 4],
      chosenCourse: null,
      chosenGrade: null
    }
  },
  methods: {
    async studentInfo() {
      try {
        const id = this.$route.params.id
        const response = await Client.get(`/students/${id}`)
        this.student = response.data
        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getCourse() {
      try {
        const response = await Client.get('/courses')
        this.courses = response.data
      } catch (error) {
        console.error(error)
      }
    },
    async assignCourse() {
      const studentId = this.$route.params.id
      try {
        await Client.put(`/students/${studentId}`, {
          courseId: this.chosenCourse
        })
        await this.studentInfo()
        this.chosenCourse = null
      } catch (error) {
        console.error(error)
      }
    },
    selectCourse(event) {
      this.chosenCourse = event.target.value
    }
  },
  mounted() {
    this.studentInfo()
    this.getCourse()
  }
}
</script>

<template>
  <div v-if="student">
    <h3>{{ student.name }}</h3>
    <div>
      <h4>Courses:</h4>
      <ul>
        <li v-for="course in student.courses" :key="course._id">
          {{ course.name }}
        </li>
      </ul>
      <select v-if="courses" name="courses" @change="selectCourse">
        <option v-for="course in courses" :value="course._id">
          {{ course.name }}
        </option>
      </select>
      <button @click="assignCourse">Assign Course</button>
    </div>
  </div>
</template>
