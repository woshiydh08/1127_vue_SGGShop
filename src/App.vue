<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide  v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  name: 'App',
  components: {
    FooterGuide
  },
  mounted(){
    this.$store.dispatch('getAddress');
    this.$store.dispatch('getUser')
  }
}
</script>

<style scoped lang="stylus">
  @import "./common/stylus/mixins.styl"

</style>
