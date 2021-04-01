<template>
  <div>
    <SwiperCom>
      <!-- 外部调用时插入内容 -->
      <div v-for="banner in banners" :key='banner.bannerId' class="swiper-slide">
        <img class="banner-img" :src="banner.imgUrl" alt="">
      </div>
    </SwiperCom>
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
          class="cont-li"
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
import SwiperCom from '@/components/swiper'
import Swiper from 'swiper'
import { instance } from '@/utils/http'

export default {
  components: {
    SwiperCom
  },
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
      ],
      banners: [

      ]
    }
  },
  created () { // 做异步请求
    instance.get('/gateway?type=2&cityId=110100&k=868202', {
      headers: {
        'X-Host': 'mall.cfg.common-banner'
      }
    }).then(res => {
      // console.log(res.data.data)
      this.banners = res.data.data
      // 实例化Swiper,划不过去 数据改变了，但是内部还在进行虚拟DOM的对比，对比才会渲染真实DOM
      this.$nextTick(() => { // 更新的延迟回调之后才会执行
        // eslint-disable-next-line no-new
        new Swiper('.swiper-container', {
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          }
        })
      })
    })
  }
}
</script>

<style lang='scss' scoped>
  div {
    .swiper-slide {
      .banner-img {
        width: 100%;
        height: 2.1px;
      }
    }
     /deep/ .swiper-pagination-buttle-active {
      background: #FF5F16!important;
    }

    ul {
      height: .5rem;
      width: 100%;
      background: #fff;
      display: flex;
      justify-content: space-around;
      li {
        font-size: 14px;
        color: #191a1b;
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
