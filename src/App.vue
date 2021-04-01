<template>
  <div id="app">
    <!-- vue-router中提供了router-view -->
    <router-view/>

    <Tabber/>
  </div>
</template>

<script>
import Tabber from 'con/tabber'

export default {
  name: 'App',
  components: {
    Tabber
  }
}
</script>

<style lang="scss">
  div#app {
    margin-bottom: .45rem;
  }
//  * {
//    margin: 0;
//    padding: 0;
//  }
//   li {
//     list-style: none;
//   }
</style>
