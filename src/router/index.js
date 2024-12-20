import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    alias: '/home',
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: {
      title: 'Sobre'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue'),
    meta: {
      title: 'Registrar-se'
    }
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('@/views/ForgotPassword.vue'),
    meta: {
      title: 'Esqueci minha senha'
    }
  },
  {
    path: '/admin',
    component: () => import('@/views/Main'),
    children: [
      {
        path: '/',
        component: () => import('@/views/Panel'),
        name: 'Panel',
        meta: {
          title: 'Painel'
        }
      },
      {
        path: '/account',
        component: () => import('@/views/Account'),
        name: 'Account',
        meta: {
          title: 'Conta'
        }
      }
    ],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/unauthorized',
    component: () => import('@/views/Unauthorized'),
    name: 'Unauthorized',
    meta: {
      title: 'Não autorizado'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters['Global/getLoginData'].isLoggedIn) {
      next({
        path: '/unauthorized',
        query: { redirect: to.fullPath }
      })
      setTimeout(() => next({
        path: '/login'
      }), 5000)
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
