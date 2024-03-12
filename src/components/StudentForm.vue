<script>
import Client from '../../services/api'

export default {
  name: 'StudentForm',
  data: function () {
    return {
      payload: {
      name: '',
      email: '',
      Id: '',
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
    handleSubmit(event) {
      event.preventDefault()
      try {
        await Client.post('/courses', this.payload)
        console.log(payload)
      } catch (error) {
        console.log(error)
      }
      this.email = ''
      this.password = ''
      this.Id = ''
      this.courses = ''
    }
  }
}
</script>

<template>
  <div class="form-container">
    <form v-on:submit="handleSubmit">
      <input
        @input="handleChange"
        placeholder="Name"
        :value="name"
        name="name"
        type="text"
      />
      <input
        @input="handleChange"
        placeholder="Email"
        :value="email"
        name="email"
        type="email"
      />
      <input
        @input="handleChange"
        placeholder="Student ID"
        :value="Id"
        name="Id"
        type="text"
      />
      <div>
        <select
          :id="courses"
          onChange="{handleChange}"
          required
          :value="courses"
        >
          <option value="" disabled>Select the course</option>
          <option value="chemistry">Chmistry</option>
          <option value="physics">Physics</option>
        </select>
      </div>
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
      <button :disabled="!name || !email || !Id || !courses">Log In</button>
    </form>
  </div>
</template>

<style></style>
