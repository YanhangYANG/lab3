import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import StudentView from '../views/StudentView.vue'
import MenuView from '../views/MenuView.vue'
import EventDetailView from '../views/EventDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'EventList',
      component: EventListView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/event/:id',
      name:'event-detail',
      component: EventDetailView,
      props: true
    },
    {
      path: '/menu',
      name: 'Menu',
      component: MenuView
    },
    {
      path: '/student',
      name: 'Student',
      component: StudentView
    },
    
  ]
})

export default router
