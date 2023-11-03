import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../views/index.vue'
import notfound from '../views/notfound/notfound.vue'
import routesconfig from './config'
// import store from '../store/index'

const routes = [
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
      path:"/",
      redirect:"/index"
  },
  {
      path:"/:pathMatch(.*)*",
      name:"Notfound",
      component:notfound
  },
  {
    path: '/index',
    name: 'index',
    component: index
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

routesconfig.forEach(item => {
  router.addRoute("index",item)
  // 改变isgetterrouter = true
  // store.commit("changegetterrouter",true)
});
// router.addRoute("index",{
//   path:"/index",
//   component:home
// })

export default router
