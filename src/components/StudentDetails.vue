<script>
const students = [{ id: 1, name: 'Ali' }]
export default {
  name: 'StudentDetails',
  data: () => ({ student: null }),
  mounted: function () {
    // this.student = students.find(
    //   (student) => student.id === parseInt(this.$route.params.id)
    // )
    console.log('id is : ', parseInt(this.$route.params.id))
  }
}
</script>

<template>
  <div>Student Details</div>
  <div>name: {{ student.name }}</div>
</template>

<style></style>
