import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

// 引入swiper样式
import 'swiper/css/swiper.min.css'

// 引入main.scss文件
import './stylesheets/main.scss'

// 引入rem.js文件
import './utils/rem.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
