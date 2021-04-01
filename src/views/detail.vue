<template>
  <div>
      详情页...{{$route.params.id}}
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created () {
    // console.log(this.$route.params.id)
  },
  beforeRouteUpdate (to, from, next) {
    console.log('update...', this)
    next()
  }
}
</script>

<style lang='scss' scoped>

</style>
