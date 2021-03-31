<template>
  <div>
    <p :style="{color:color}">one组件</p>
  </div>
</template>

<script>
import angle from '@/utils/bus'

export default {
  data () {
    return {
      color: 'red'
    }
  },
  methods: {

  },
  mounted () {
    angle.$on('change', () => {
      this.color = 'green'
    })
  }
}
</script>

<style lang='scss' scoped>

</style>
