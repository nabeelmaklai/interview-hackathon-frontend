<script>
import Client from '../../services/api'

export default {
  name: 'CourseForm',
  data: function () {
    return {
      payload: {
        name: ''
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
        await Client.post('/courses', this.payload)
      } catch (error) {
        console.log(error)
      }
      this.payload.name = ''
    }
  }
}
</script>

<template>
  <div>
    <form v-on:submit="handleSubmit">
      <input
        @input="handleFormChange"
        placeholder="Name"
        :value="payload.name"
        name="name"
        type="text"
      />
      <button :disabled="!payload.name">
        Add Course
      </button>
    </form>
  </div>
</template>

<style></style>
