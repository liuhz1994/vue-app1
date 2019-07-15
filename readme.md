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

#### 2.5.7 绘制评论子组件的样式

~~~
添加子组件的过程：
1.先创建一个单独的 comment.vue 组件模版
2.在需要使用 comment 组件的页面,导入 comment 组件
3.在父组件中，使用 components 属性 ，将导入的子组件 注册为自己的子组件
4.以标签的形式，在页面中应用
~~~

~~~
子组件间值的传递：
1.<comment fid="f_id"></comment>
2.子组件实例中{props:['fid']}
3.直接使用{{this.fid}}
~~~

#### 2.5.8 加载首页评论内容

#### 2.5.9 完成评论数据的点击加载更多功能

#### 2.5.10 完成评论的功能

~~~
vue-resources POST传参：
第一个参数为 请求的url地址
第二个参数为 提交给服务器的数据对象{}
第三个参数为 表单中数据的格式//{emulateJSON:true}
~~~



### 2.6 图片组件

#### 2.6.1 改造图片分析按钮为路由的链接 并 显示对应的组件页面

#### 2.6.2 图片列表顶部导航条的制作

~~~
1.移除严格模式
2.chrome提高页面的滑动流程度
  *{touch-action: pan-y;}
~~~

[babel-plugin-transform-remove-strict-mode](https://github.com/genify/babel-plugin-transform-remove-strict-mode)

#### 2.6.3 渲染分类列表的数据