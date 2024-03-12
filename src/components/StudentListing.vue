<script>
export default {
  name: 'StudentListing',
  data: () => ({ students: [] }),
  methods: {
    navigateStudent(id) {
      this.$router.push(`/students/${id}`)
    }
  },
  mounted: function () {
    this.students = [{ name: 'Ali', id: 1 }]
  }
}
</script>

<template>
  <div>Students</div>
  <div v-for="student in students" :key="student.id">
    <div class="student" @click="navigateStudent(student.id)">
      {{ student.name }}
    </div>
  </div>
</template>

<style>
.student {
  text-decoration: underline;
  cursor: pointer;
}
.student:hover {
  background-color: cyan;
}
</style>
