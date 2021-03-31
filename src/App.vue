<template>
  <div id="app">
    子组件数据---{{pmsg}}
    <hello-world @change="change" :msg='msg'></hello-world>
    <p>你好</p>
    <hr>
    <One/>
    <Two/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import One from '@/components/One'
import Two from '@/components/Two'

export default {
  name: 'App',
  components: {
    'hello-world': HelloWorld,
    One,
    Two
  },
  methods: {
    change (msg) {
      this.pmsg = msg
    }
  },
  data () {
    return {
      msg: 'hello-world....',
      pmsg: ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
