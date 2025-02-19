import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './../components/HomePage.vue'
import About from './../components/About.vue'
import Booking from './../components/Booking.vue'
import Contact from './../components/Contact.vue'
import Feedback from './../components/Feedback.vue'
import HelloWorld from './../components/HelloWorld.vue'
import Menu from './../components/Menu.vue'
import Order from './../components/Order.vue'
import RestaurantList from './../components/RestaurantList.vue'

//route array of objects : path, component
const routes = [
  {
    path:'/',
    component: HomePage
  },
  {
    path:'/About',
    component: About
  },
  {
    path:'/Booking',
    component: Booking
  },
  {
    path:'/Contact',
    component: Contact
  },
  {
    path:'/Feedback',
    component: Feedback
  },
  {
    path:'/HelloWorld',
    component: HelloWorld
  },
  {
    path:'/Menu',
    component: Menu
  },
  {
    path:'/Order',
    component: Order
  },
  {
    path:'/RestaurantList',
    component: RestaurantList
  },
  
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
