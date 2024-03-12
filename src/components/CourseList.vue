<script>
import CourseForm from './CourseForm.vue'

export default {
  name: 'CourseList',
  data: function () {
    return {
      course: ''
    }
  }
}
</script>

<template>
  <div>
    <h2>Course: {{ course.name }}</h2>
  </div>
</template>

<style></style>