import { createApp } from 'vue'
import App from './App.vue'
import LoginAnnouncements from './frontend/src/components/LoginAnnouncements.vue'
import LoginScheduleOfClasses from './frontend/src/components/LoginScheduleOfClasses.vue'

const app = createApp(App)

// Vue Router
import { createRouter, createWebHistory } from 'vue-router'

// import route components
import Admin from './pages/Admin.vue'
import Adviser from './pages/Adviser.vue'
import Advising from './pages/Advising.vue'
import Contact from './pages/Contact.vue'
import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import Ocs from './pages/OCS.vue'

// set routes
const routes = [
  {path: '/', component: Home},
  {
    path: '/admin/:randomString',
    name: 'admin-with-random',
    component: Admin,
  },  
  {path: '/adviser', component: Adviser},
  {path: '/advising', component: Advising},
  {path: '/contact', component: Contact},
  {path: '/login', component: Login},
  {path: '/ocs', component: Ocs},

  { path: '/login-announcements', component: LoginAnnouncements },
  { path: '/login-schedule-of-classes', component: LoginScheduleOfClasses }
]

const router = createRouter({
  history: createWebHistory(), routes
})
app.use(router)
// end Vue Router

// Vue Axios
import axios from 'axios'
import VueAxios from 'vue-axios'
app.use(VueAxios, axios)
// end Vue Axios

app.mount('#app')
