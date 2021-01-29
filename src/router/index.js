import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/home/Home.vue'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('views/category/Category.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('views/cart/Cart.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('views/profile/Profile.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('views/detail/Detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router