import Vue from 'vue'
import moment from 'moment'

// 对于影片简略中演员的过滤
Vue.filter('filterActor', (actors, options = ' ') => {
  return actors.map(item => {
    if (item.role !== '导演') {
      return item.name
    }
  }).join(options)
})

// 对于即将上映的上映时间过滤
moment.locale('zh-cn') // 设置中文

Vue.filter('filterTime', (time) => {
  return moment(time * 1000).format('ddd M月D日')
})
