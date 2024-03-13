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
      <button :disabled="!payload.name || !payload.email || !payload.studentId">
        Register
      </button>
    </form>
  </div>
</template>

<style></style>
