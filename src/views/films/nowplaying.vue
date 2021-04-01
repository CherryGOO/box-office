<template>
    <div>
        <ul>
          <li @click="toDetail(111)">
              电影111
          </li>
          <li @click="toDetail(222)">
              电影222
          </li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    toDetail (id) {
      this.$router.push('/detail/' + id)
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
