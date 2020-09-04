import Vue from 'vue'
import VueRouter from 'vue-router'

import Testing from './components/Testing.vue'
import Exercise from './components/Exercise.vue'

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
  ],
  mode: 'abstract' // history
})

export default router