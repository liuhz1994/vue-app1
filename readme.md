# vue-app

## 1. 技术选型

### 1.1 mint-ui

[Mint-ui官网](<https://mint-ui.github.io/#!/zh-cn>)

### 1.2 Mui

[github 地址](<https://github.com/dcloudio/mui>)

## 2. 开发过程

### 2.1 制作项目首页的Header 和 Tabbar

+ 入口文件 main.js 中导入css

~~~js
import './lib/mui/css/mui.css'
~~~

### 2.2 制作底部菜单

1. 导入路由的包
2. 安装路由
3. 导入自己的 router.js 路由模块

   [Vue-Router API]([https://router.vuejs.org/zh/guide/essentials/named-views.html#%E5%B5%8C%E5%A5%97%E5%91%BD%E5%90%8D%E8%A7%86%E5%9B%BE](https://router.vuejs.org/zh/guide/essentials/named-views.html#嵌套命名视图))

### 2.3 首页按钮

### 2.4 组件切换的动画效果

~~~vue
1. <transition>组件</transition>
2. v-enter,v-leave-to{opacity:0;transform:translateX(100%)}
   v-enter-active,v-leave-active{transition:all 0.5s ease}
~~~



### 2.5 新闻组件

#### 2.5.1 改造新闻资讯的路由链接

#### 2.5.2 绘制新闻资讯列表页面布局

~~~css
{
    display:flex;//弹性盒子
    justify-content: space-between
}
~~~

#### 2.5.3 获取新闻资讯列表并渲染页面

#### 2.5.4 完成新闻列表中时间格式化

~~~javascript
npm i moment -S //日期处理类库
~~~

#### 2.5.5 改造新闻列表跳转到新闻详情的路由

~~~
Vue.http.options.root //设置全局
~~~



#### 2.5.6 获取并渲染新闻详情数据

####  