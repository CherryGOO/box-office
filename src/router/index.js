import Vue from 'vue'
import Router from 'vue-router'
// import Films from '@/views/film'
// import Nowplaying from '@/views/films/nowplaying'
// import Comingsoon from '@/views/films/comingsoon'
// import Detail from '@/views/detail'
// import Cinema from '@/views/cinema'
// import News from '@/views/news'
// import Mine from '@/views/mine'
// import NotFound from '@/views/notfound'

// 需要在vue中使用Router插件  背后的原理    调用了MyPlugin.install(Vue)方法
Vue.use(Router)

const routes = [
  {
    path: '/films', // 在url地址栏上输入的地址
    component: () => import('@/views/film'), // 对应url地址栏的视图组件
    children: [
      {
        path: '/films/nowplaying',
        component: () => import('@/views/films/nowplaying'),
        name: 'np'
      },
      {
        path: '/films/comingsoon',
        component: () => import('@/views/films/comingsoon'),
        name: 'cs'
      },
      {
        path: '',
        redirect: '/films/nowplaying'
      }
    ]
  },
  {
    path: '/detail/:id',
    component: () => import('@/views/detail')
  },
  {
    path: '/cinema',
    component: () => import('@/views/cinema')
  },
  {
    path: '/news',
    component: () => import('@/views/news')
  },
  {
    path: '/mine',
    component: () => import('@/views/mine')
  },
  {
    path: '/',
    redirect: '/films'
  },
  {
    path: '/404',
    component: () => import('@/views/notfound')
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
