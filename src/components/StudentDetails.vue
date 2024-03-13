<script>
import Client from '../../services/api'

export default {
  name: 'StudentDetails',
  data() {
    return {
      student: null,
      courses: [],
      chosenCourse: null,
      grades: [0, 1, 2, 3, 4],
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
    },
    selectGrade(event) {
      this.selectedGrade = event.target.value
    }
    // ,
    // async getGrades() {
    //   const response = await axios.get(`${BASE_URL}/grades`)
    //   this.grades = response.data
    // }
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
    <h4>{{ student.email }}</h4>
    <h4>{{ student.studentId }}</h4>
    <div>
      <h4>Courses:</h4>
      <ul>
        <li v-for="course in student.courses" :key="course._id">
          {{ course.name }}
        </li>
      </ul>
      <div>
        <select v-if="courses" name="courses" @change="selectCourse">
          <option v-for="course in courses" :value="course._id">
            {{ course.name }}
          </option>
        </select>
        <select v-if="grades" name="grades" @change="selectGrade">
          <option v-for="grade in grades" :value="grade._id">
            {{ grade }}
          </option>
        </select>
        <button @click="assignCourse">Assign Course</button>
      </div>
    </div>
  </div>
</template>
