import Vue from 'vue'
import VueRouter from 'vue-router'

import Intro from './components/Intro.vue'
import Game from './components/Game.vue'
import Won from './components/Won.vue'
import Lost from './components/Lost.vue'

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
  {
    path: '/won',
    name: 'won',
    component: Won
  },
  {
    path: '/lost',
    name: 'lost',
    component: Lost
  },
]

export default new VueRouter({
  mode: 'history',
  routes
})
