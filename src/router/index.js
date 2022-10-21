import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import user from '../views/user.vue'
import main from '../views/main.vue'
import mall from '../views/mall.vue'
import pageOne from '../views/pageOne.vue'
import pageTwo from '../views/pageTwo.vue'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component: main,
        name:'main',
        redirect: '/home', //重定向
        children: [
           /*    { path: 'home', name:'home', component: home },
            { path: 'mall', name:'mall',component: mall },
            { path: 'user', name:'user',component: user },
            { path: 'page1', name:'page1', component: pageOne },
            { path: 'page2', name:'page2',component: pageTwo },  */ 
        ]
    },
    {
        path:'/login',
        name:'login',
        component:login
    }
  ]

const router = new VueRouter({
    routes
})

  export default router
