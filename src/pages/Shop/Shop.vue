<template>
  <div>
    <ShopHeader></ShopHeader>
    <router-link to="/shop/goods">goods</router-link>
    <router-link to="/shop/info">info</router-link>
    <router-link to="/shop/ratings">ratings</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
  import ShopHeader from '../../components/ShopHeader/ShopHeader'
    export default {
        name: "Shop",
      components:{
        ShopHeader
      }
    }
</script>

<style scoped>

</style>
