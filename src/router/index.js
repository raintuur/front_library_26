import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LibraryView from "@/views/LibraryView";
import libraryView from "@/views/LibraryView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/library/city-list/all',
    name: 'libraryList',
    component: libraryView
  },{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/by-city',
    name: 'Library',
    component: LibraryView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
