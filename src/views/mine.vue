<template>
  <div>
      我的
  </div>
</template>

<script>
import { instance2 } from '@/utils/http'

export default {
  data () {
    return {

    }
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.getItem('token')) {
      instance2.post('/api/user/isloginin').then(res => {
        next()
      }).catch(() => next('/login'))
    } else {
      next('/login')
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
