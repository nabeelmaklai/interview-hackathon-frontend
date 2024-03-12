<script>
import Client from '../../services/api'

export default {
  name: 'StudentForm',
  data: function () {
    return {
      payload: {
        name: '',
        email: '',
        studentId: '',
        courses: []
      }
    }
  },
  methods: {
    handleFormChange(event) {
      this.payload[event.target.name] = event.target.value
    },
    // ,
    // handleChange(e) {
    //   if (e.target.checked) {
    //     this.courses((prev) => [...prev, e.target.id])
    //   } else {
    //     const uncheck = (value) => {
    //       return value !== e.target.id
    //     }
    //     this.courses((prev) => prev.filter(uncheck))
    //   }
    // }
    async handleSubmit(event) {
      event.preventDefault()
      try {
        await Client.post('/students', this.payload)
      } catch (error) {
        console.log(error)
      }
      this.payload.name = ''
      this.payload.email = ''
      this.payload.studentId = ''
      this.payload.courses = []
    }
  }
}
</script>

<template>
  <div class="form-container">
    <form v-on:submit="handleSubmit">
      <input
        @input="handleFormChange"
        placeholder="Name"
        :value="payload.name"
        name="name"
        type="text"
      />
      <input
        @input="handleFormChange"
        placeholder="Email"
        :value="payload.email"
        name="email"
        type="email"
      />
      <input
        @input="handleFormChange"
        placeholder="Student ID"
        :value="payload.studentId"
        name="studentId"
        type="text"
      />
      <!-- <div>
        <select
          :id="courses"
          @input="
            {
              handleChange
            }
          "
          required
          :value="payload.courses"
        >
          <option value="" disabled>Select the course</option>
          <option :value="payload.courses">Chemistry</option>
          <option :value="payload.courses">Physics</option>
        </select>
      </div> -->
      <!-- <div>
        <label htmlFor="science">Science</label>
        <input
          id=""
          :value="courses"
          type="checkbox"
          onChange="{handleChange}"
        />
        <label htmlFor="chemistry">Chemistry</label>
        <input
          id="chemistry"
          :value="courses"
          type="checkbox"
          onChange="{handleChange}"
        />
      </div> -->
      <button :disabled="!payload.name || !payload.email || !payload.studentId">
        Register
      </button>
    </form>
  </div>
</template>

<style></style>
