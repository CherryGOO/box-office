<!--  -->
<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: '用的默认值'
    }
  },
  components: {

  },
  data () {
    return {
      child: '自己的数据'
    }
  },
  computed: {

  },
  watch: {

  },
  methods: {

  },
  created () {
    // 触发绑定在自身上的change事件
    this.$emit('change', this.child)
  },
  mounted () {

  }
}
</script>

<style lang='scss' scoped>

</style>
