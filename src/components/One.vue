<template>
  <div class="one">
    <p :style="{color:color}">one组件</p>
    <button>one的按钮</button>
    <div class="one-c">
      <OneC/>
    </div>
  </div>
</template>

<script>
import angle from '@/utils/bus'
import OneC from 'con/One-c'

export default {
  data () {
    return {
      color: 'red'
    }
  },
  components: {
    OneC
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
  .one{
    /deep/ button {
      color: blue;
    }
  }
</style>
