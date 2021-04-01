<template>
  <div>
      我的
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next('/login')
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
