import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import StudentListing from './components/StudentListing.vue'
import CourseListing from './components/CourseListing.vue'
import StudentDetails from './components/StudentDetails.vue'
<<<<<<< HEAD
import StudentForm from './components/StudentForm.vue'
import CourseForm from './components/CourseForm.vue'

const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/students', component: StudentListing, name: 'StudenTlistings' },
  { path: '/studentform', component: StudentForm, name: 'StudentForm' },
=======
import Students from './components/Students.vue'

const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  {
    path: '/studentslists',
    component: StudentListing,
    name: 'Studentlistings'
  },
  { path: '/students', component: Students, name: 'Students' },

>>>>>>> 0afa20cdfb89dd43ee1c9768037162fe019ee507
  { path: '/courses', component: CourseListing, name: 'CourseListings' },
  { path: '/students/:id', component: StudentDetails, name: 'StudentDetails' },
  { path: '/courseform', component: CourseForm, name: 'CourseForm' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
