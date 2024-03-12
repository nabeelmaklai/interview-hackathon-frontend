<script>
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar
  },
  data: () => ({ heading: '' }),
  methods: {
    showWallets() {},
    hideWallets() {}
  },
  mounted: function () {}
}
</script>

<template>
  <div>
    <h1>The School App</h1>
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
