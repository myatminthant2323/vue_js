import Vue from 'vue'
import VueRouter from 'vue-router'

import Testing from './components/Testing.vue'
import Exercise from './components/Exercise.vue'
import Dynamic from './components/Dynamic.vue'

Vue.use(VueRouter)


const router = new VueRouter({
	routes: [
    {
      path: '/testing',
      component: Testing
    },
    {
      path: '/exercise',
      component: Exercise
    },
    {
      path: '/dynamic_route/:id',
      name: 'dynamic',
      props: true,
      component: Dynamic
    },
  ],
  mode: 'history' // abstract
})

export default router