<template>
    <div>
      ShopHeader
    </div>
</template>

<script>
  export default {
    name: "ShopHeader",
    mounted () {
      this.$store.dispatch('geatShopInfo')
    }
  }
</script>

<style scoped>

</style>
