<template>
  <ul>
      <!-- <router-link
        v-for="nav in navLink"
        :key="nav.id"
        :to='nav.path'
        active-class="active"
        tag="li"
      >
        {{nav.title}}
      </router-link> -->

      <!-- v-slot 形式 -->
      <router-link
        v-for="nav in navLink"
        :key="nav.id"
        :to='nav.path'
        custom
        active-class="active"
        v-slot="{ isActive,navigate }"
      >
        <li
          :class="isActive ? 'active' : '' "
          @click="navigate"
          @keypress.enter="navigate"
          role="link"
        >
          <i class="iconfont" :class="nav.icon"></i>
          {{nav.title}}
        </li>
      </router-link>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      navLink: [
        {
          id: 1,
          path: '/films',
          title: '电影',
          icon: 'icon-movie'
        },
        {
          id: 2,
          path: '/cinema',
          title: '影院',
          icon: 'icon-cinema'
        },
        {
          id: 3,
          path: '/news',
          title: '资讯',
          icon: 'icon-line-news'
        },
        {
          id: 4,
          path: '/mine',
          title: '我的',
          icon: 'icon-mine'
        }
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
      background: #fff;

      li {
        font-size: 12px;
        flex: 1;
        text-align: center;
        line-height: 20px;
        display: flex;
        flex-direction: column;

        i {
          font-size: 21px;
          margin-top: .05rem;
        }

      }

      .active {
        color: #FF5F16;
      }

    }
</style>
