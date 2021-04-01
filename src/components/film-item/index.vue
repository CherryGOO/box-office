<template>
  <div class="film-item">
    <img :src="film.poster" alt="">
    <div class="content">
      <p class="film-title">
        <span class="film-name">
          {{film.name}}
        </span>
        <span class="film-type">
          {{film.filmType.name}}
        </span>
      </p>
      <p class="film-grade"  v-if="type==='nowplaying'">
        <span v-if="film.grade">观众评分<span class="value">{{film.grade}}</span></span>
        <span v-else>暂无评分</span>
        </p>
      <p class="film-actors">主演：{{film.actors | filterActor(' ')}}</p>
      <p v-if="type==='nowplaying'">{{film.nation}}  |  {{film.runtime}}分钟</p>
      <p v-if="type==='comingsoon'">上映日期：{{film.premiereAt | filterTime}}</p>
    </div>
    <span class="buy">购票</span>
  </div>
</template>

<script>

export default {
  props: ['film', 'type']
}
</script>

<style lang='scss' scoped>
  .film-item {
    display: flex;
    padding: .15rem .15rem .15rem 0;
    color: #797D82;
    // flex-direction: column;
    justify-content: space-around;
    align-items: center;

    img {
      width: .66rem;
      height: .9802rem;
    }

    .content {
      width: 2.1rem;
      padding: 0 .1rem;
      display: flex;
      justify-content: space-around;
      flex-direction: column;

      .film-title {
        display: flex;
        align-items: center;
        // justify-content: center;
        // flex-direction: column;
        .film-name {
          font-size: 16px;
          margin: 0 0.05rem 0 0;
          color: #191A1B;
        }

        .film-type {
          font-size: 12px;
          width: .20rem;
          height: .14rem;
          line-height: .14rem;
          padding: 0 .02rem;
          background: #D2D6DC;
          border-radius: .02rem;
          color: #fff;
        }
      }

      .film-grade {
        height: .21rem;
        line-height: .21rem;
        font-size: 13px;

        span.value {
          font-size: 14px;
          line-height: .21rem;
          color: #FFB232;
          margin:0 0 0 0.04rem ;
        }
      }

      .film-actors {
        font-size: 13px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }

    }

    .buy {
      width: .5rem;
      height: .25rem;
      line-height: .25rem;
      border: 1px solid #ff5f16;
      color: #ff5f16;
      font-size: 13px;
      text-align: center;
      border-radius: 4px;
    }

    border-bottom: 1px solid #ededed;
  }
</style>
