<template>
    <div class="nowplaying">
        <div
          v-for="film in films"
          :key="film.filmId"
        >
          <FilmItem type='nowplaying' :film='film'/>
        </div>
    </div>
</template>

<script>
import { instance } from '@/utils/http'
import FilmItem from 'con/film-item'

export default {
  data () {
    return {
      films: []
    }
  },
  async created () {
    const res = await instance.request({
      url: '/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=2167057',
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    })
    console.log(res.data.data.films)
    this.films = res.data.data.films
  },
  components: {
    FilmItem
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
  .nowplaying{
    padding-left: .15rem;
    background: #fff;
  }
</style>
