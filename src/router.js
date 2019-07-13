import VueRouter from 'vue-router'

import HomeContainer from './component/tabbar/HomeContainer.vue'
import MemberContainer from './component/tabbar/MemberContainer.vue'
import ShopcarContainer from './component/tabbar/ShopcarContainer.vue'
import SearchContainer from './component/tabbar/SearchContainer.vue'
import newListContainer from './component/news/newsListContainer.vue'
import newsinfoContainer from './component/news/newsinfoContainer.vue'


// 3. 创建路由对象
var router = new VueRouter({//配置路由对象
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/shopcar',component:ShopcarContainer},
    {path:'/search',component:SearchContainer},
    {path:'/home/newslist',component:newListContainer},
    {path:'/home/newsinfo/:id',component:newsinfoContainer},
  ],
  linkActiveClass:'mui-active',
 
})

// 把路由对象暴露出去
export default router