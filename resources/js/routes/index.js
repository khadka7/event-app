import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Pages
const Event = () => import('../pages/event/Event')
const Home = () => import('../pages/home/Home')
const EventForm = () => import('../pages/event/EventForm')

const routes =  [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/events',
        name: 'Event',
        component: Event,
    },
    {
        path: '/event/add',
        name: 'AddEvent',
        component: EventForm,
    },
    {
        path: '/event/:id/edit',
        name: 'EditEvent',
        component: EventForm,
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
