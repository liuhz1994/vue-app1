// 入口文件
import Vue from 'vue';
import VueRouter from 'vue-router';//导入路由
import VueResource from 'vue-resource';
// import { Header,Swipe, SwipeItem,Button,Lazyload    } from 'mint-ui';

// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem,);
// Vue.component(Button.name, Button,);
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.use(VueRouter);//使用路由
Vue.use(VueResource)//使用资源访问 
Vue.use(MintUI)//使用资源访问

//Vue.http.options.root = 'http://192.168.0.102:3001';
Vue.http.options.root = 'http://localhost:3001';

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import router from './router.js';

//到入App根组件
import app from './App.vue';
import moment from 'moment'
//定义过滤器,必须要在vm实例初始化之前
Vue.filter('timeFormart',function(value){

    if (!value) return ''
    return moment(value).format('YYYY-MM-DD');
})

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router//挂载路由,
})



