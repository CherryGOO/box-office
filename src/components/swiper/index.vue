<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- 外部调用时插入内容 -->
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>

</style>
