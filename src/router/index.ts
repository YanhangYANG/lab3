import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import StudentView from '../views/StudentView.vue'
import MenuView from '../views/MenuView.vue'
import EventDetailView from '../views/event/EventDetailView.vue'
import EventEditView from '@/views/event/EventEditView.vue'
import EventRegisterView from '@/views/event/EventRegisterView.vue'
import EventLayoutView from '@/views/event/EventLayoutView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import NetworkErrorView from '@/views/NetworkErrorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'EventList',
      component: EventListView,
      props: (route) => ({
        page: parseInt((route.query?.page as string) || '1'),
        size: parseInt((route.query?.size as string) || '2')
      })
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/event/:id',
      name: 'event-layout',
      component: EventLayoutView,
      props: true,
      children: [
        {
          path: '',
          name: 'event-detail',
          component: EventDetailView,
          props: true
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: EventEditView,
          props: true
        },
        {
          path: 'register',
          name: 'event-register',
          component: EventRegisterView,
          props: true
        }
      ]
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
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFoundView
    },
    {
      path: '/network-error',
      name: 'network-error',
      component: NetworkErrorView
    },
    {
      path: '/404/:resource',
      name: '404-resource',
      component: NotFoundView,
      props: true
    }
  ]
})

export default router
