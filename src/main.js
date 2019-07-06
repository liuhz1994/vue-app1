// 入口文件
import Vue from 'vue';
import VueRouter from 'vue-router';//导入路由
import { Header,Swipe, SwipeItem  } from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.use(VueRouter);//使用路由

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import router from './router.js';

//到入App根组件
import app from './App.vue';

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router//挂载路由
})

