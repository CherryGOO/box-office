<template>
  <div>
      登录页面
      <button @click='login'>登录</button>
  </div>
</template>

<script>
import { instance2 } from '@/utils/http'
// import axios from 'axios'

export default {
  data () {
    return {

    }
  },
  methods: {
    login () {
      instance2.post('/api/user/loginin', {
        username: 'kitty',
        password: 123
      }).then(res => {
        // console.log('3.login==>', res)

        // 将后端返回的token令牌存入本地存储中
        localStorage.setItem('token', res.token)
        // 编程式导航
        this.$router.push('/mine')
      }).catch(err => {
        console.log('err==>', err)
      })
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
