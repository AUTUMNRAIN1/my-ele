import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Search from '@/components/search'
import Order from '@/components/order'
import Myself from '@/components/myself'
import showFood from '@/components/food/showFood'
import Merchan from '@/components/food/merchan'
import Discuss from '@/components/food/discuss'
import Seller from '@/components/food/seller'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    //重定向到首页
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home      
    },
    //指向搜索页面
    {
      path: '/search',
      component: Search
    },
    //指向订单页面
    {
      path: '/order',
      component: Order
    },
    //指向个人页面
    {
      path: '/myself',
      component: Myself
    },
    //指向商品详情页面
    {
       path: '/food/showFood',
       component: showFood,
       children:[
       	{ path: '',component:Merchan},
        { path: 'merchan',component:Merchan },
        { path: 'discuss',component:Discuss },
        { path: 'seller',component:Seller }
       ]
    }
    //指向商品详情页面的商家页面
     // {
     //  path:'/food/merchan',
     //  component:'Merchan'
     // }
  ]
})
