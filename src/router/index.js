import Vue from 'vue'
import Router from 'vue-router'
import Films from '@/views/film'
import Cinema from '@/views/cinema'
import News from '@/views/news'
import Mine from '@/views/mine'
import NotFound from '@/views/notfound'
import Nowplaying from '@/views/films/nowplaying'
import Comingsoon from '@/views/films/comingsoon'

// 需要在vue中使用Router插件  背后的原理    调用了MyPlugin.install(Vue)方法
Vue.use(Router)

const routes = [
  {
    path: '/films', // 在url地址栏上输入的地址
    component: Films, // 对应url地址栏的视图组件
    children: [
      {
        path: '/films/nowplaying',
        component: Nowplaying,
        name: 'np'
      },
      {
        path: '/films/comingsoon',
        component: Comingsoon,
        name: 'cs'
      },
      {
        path: '',
        redirect: '/films/nowplaying'
      }
    ]
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/news',
    component: News
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/',
    redirect: '/films'
  },
  {
    path: '/404',
    component: NotFound
  },
  {
    path: '*', // 以上页面都为匹配上即跳转films页面
    redirect: '/films'
  }
]

const router = new Router({
  routes // 配置路径与组件的映射
})

export default router
