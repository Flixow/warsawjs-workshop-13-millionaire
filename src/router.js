import Vue from 'vue'
import VueRouter from 'vue-router'

import Intro from './components/Intro.vue'
import Game from './components/Game.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'intro',
    component: Intro
  },
  {
    path: '/game',
    name: 'game',
    component: Game
  },
]

export default new VueRouter({
  mode: 'history',
  routes
})
