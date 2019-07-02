import Vue from 'vue'
import Router from 'vue-router'
import home from './pages/home/Home.vue'
import starships from './pages/starships-list/StarShipList.vue'
import starship from './pages/starship-details/StarShipDetails.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: home },
    { path: '/starships/:search', component: starships, props: true },
    { path: '/starship', component: starship }
  ]
})
