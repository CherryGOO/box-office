<template>
  <ul>
      <router-link
        v-for="nav in navLink"
        :key="nav.id"
        :to='nav.path'
        active-class="active"
        tag="li"
      >
        {{nav.title}}
      </router-link>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      navLink: [
        { id: 1, path: '/films', title: '电影' },
        { id: 2, path: '/cinema', title: '影院' },
        { id: 3, path: '/news', title: '资讯' },
        { id: 4, path: '/mine', title: '我的' }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
    ul {
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        height: 45px;
        display: flex;
        justify-content: space-around;
        // align-items: center;
        background: #fff;
        li {
            font-size: 12px;
            flex: 1;
            text-align: center;
            line-height: 45px;
        }
        .active {
            color: orange;
        }

    }
</style>
