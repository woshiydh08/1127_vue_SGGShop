<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide  v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'
  import {reqAddress} from '../src/api/index'
export default {
  name: 'App',
  components: {
    FooterGuide
  },
}
</script>

<style scoped lang="stylus">
  @import "./common/stylus/mixins.styl"

</style>
