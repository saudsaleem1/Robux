import Vue from 'vue'
import VueRouter from 'vue-router'
import AppLayout from '@/components/layout/app/AppLayout'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Earn from '@/views/Earn'
import Code from '@/views/Code'
import Withdraw from '@/views/Withdraw'
import Affiliation from '@/views/Affiliation'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [{
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: 'login',
        name: 'Login',
        component: Login
      },
      {
        path: 'earn',
        name: 'Earn',
        component: Earn
      },
      {
        path: 'code',
        name: 'Code',
        component: Code
      },
      {
        path: 'withdraw',
        name: 'Withdraw',
        component: Withdraw
      },
      {
        path: 'giveaway',
        name: 'Giveaway',
        component: () => import(/* webpackChunkName: "giveaway" */ '@/views/Giveaway.vue')
      },
      {
        path: 'rewards',
        name: 'Reward',
        component: () => import(/* webpackChunkName: "rewards" */ '@/views/Reward.vue')
      },
      {
        path: 'affiliations',
        name: 'Affiliation',
        component: Affiliation
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=> {
  // redirect to login page if not logged in and trying to access a restricted page
  const authRequired = !includes_path(to.path);
  const loggedIn = localStorage.getItem('user');

  // if logged in and on login page
  if (loggedIn && to.path === '/login') {
    return next('/');
  }

  // if needs to be logged in
  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
});

function includes_path(page) {
  const privatePages = ['/earn',
  '/code', '/withdraw',
  '/giveaway', '/rewards',
  '/affiliations'];

  for (var i = 0; i < privatePages.length; i++) {
    if (page.indexOf(privatePages[i]) > -1) {
      return false;
    }
  }

  return true;
}

export default router
