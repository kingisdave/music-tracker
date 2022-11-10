import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import AllSongsView from '../views/songs/Index.vue'
import CreateSong from '../views/songs/CreateSong.vue'
import ViewSong from '../views/songs/ViewSong.vue'
import EditSong from '../views/songs/EditSong.vue'
import DashboardView from '../views/privates/DashboardView.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/songs',
    name: 'songs',
    component: AllSongsView
  },
  {
    path: '/songs/create',
    name: 'songs-create',
    component: CreateSong
  },
  {
    path: '/songs/:songId',
    name: 'song',
    component: ViewSong
  },
  {
    path: '/songs/:songId/edit',
    name: 'song-edit',
    component: EditSong
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/account',
    name: 'account',
    component: DashboardView
  },
  {
    path: '/admin',
    name: 'admin',
    component: DashboardView
  },
  {
    path: '/categories',
    name: 'categories',
    component: DashboardView
  },
  {
    path: '/wallet',
    name: 'wallet',
    component: DashboardView
  },
  {
    path: '/inbox',
    name: 'inbox',
    component: DashboardView
  },
  {
    path: '/timeline',
    name: 'timeline',
    component: DashboardView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'songs',
    component: AllSongsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
