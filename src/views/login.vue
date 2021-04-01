<template>
  <div>
      登录页面
      <button @click='login'>登录</button>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    login () {
      setTimeout(() => {
        localStorage.setItem('token', 'CherryGGO')
        this.$router.push('/mine')
      }, 1000)
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
