import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import StudentListing from './components/StudentListing.vue'
import CourseListing from './components/CourseListing.vue'
import StudentDetails from './components/StudentDetails.vue'

const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/students', component: StudentListing, name: 'StudenTlistings' },
  { path: '/courses', component: CourseListing, name: 'CourseListings' },
  { path: '/students/:id', component: StudentDetails, name: 'StudentDetails' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
