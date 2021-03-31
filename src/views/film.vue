<template>
  <div>
      <div>
        轮播图
      </div>
      <ul>
        <!-- <router-link
          v-for="cont in contList"
          :key="cont.id"
          :to='cont.path'
          active-class="active"
          tag="li"
        >
          {{cont.title}}
        </router-link> -->
      <!-- v-slot 形式 -->
        <router-link
          v-for="cont in contList"
          :key="cont.id"
          :to='cont.path'
          custom
          active-class="active"
          v-slot="{ isActive,navigate }"
        >
          <li
            :class="isActive ? 'active' : '' "
            @click="navigate"
            @keypress.enter="navigate"
            role="link"
          >{{cont.title}}</li>
        </router-link>
      </ul>

      <!-- 将二级路由视图在一级路由视图的某个位置显示 -->
      <router-view></router-view>
  </div>
</template>

<script>
export default {

  data () {
    return {
      contList: [
        {
          id: 1,
          path: '/films/nowplaying',
          title: '正在热映'
        },
        {
          id: 2,
          path: '/films/comingsoon',
          title: '即将上映'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
  div {

    ul {
      height: 50px;
      width: 100%;
      background: #fff;
      display: flex;
      justify-content: space-around;
      li {
        flex: 1;
        text-align: center;
        height: 50px;
        line-height: 50px;
      }
      .active {
        color: #FF5F16;
      }
    }
  }
</style>
