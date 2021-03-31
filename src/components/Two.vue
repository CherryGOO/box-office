<template>
  <div>
    two组件--<button @click="changeColor">点击更改颜色</button>
  </div>
</template>

<script>
import angle from '@/utils/bus'

export default {
  data () {
    return {
      // color: 'red'
    }
  },
  methods: {
    changeColor () {
      angle.$emit('change')
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
