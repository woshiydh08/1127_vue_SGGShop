<template>
  <section class="msite">
    <TopHeader :title="address.name">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </TopHeader>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categorysArr.length>0">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(shop,index) in categorys" :key="index">
              <div class="food_container">
                <img :src="'https://fuss10.elemecdn.com'+shop.image_url">
              </div>
              <span>{{shop.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <img src="./images/msite_back.svg" v-else />

    </nav>
    <!--首页附近商家-->
    <ShopList></ShopList>
  </section>
</template>

<script>
  import 'swiper/dist/css/swiper.min.css'
  import ShopList from '../../components/ShopList/ShopList'
  import {mapState} from 'vuex'
  import Swiper from 'swiper'

  export default {
    name: "MSite",
    components:{
      ShopList
    },
    mounted(){
      this.$store.dispatch('getShops')
      this.$store.dispatch('getCategorys')
    },
    computed:{
      ...mapState(['address','categorys']),
      // 返回一个二维数组
      categorysArr(){
        const {categorys} = this;
        const bigArr = [];
        let smallArr = [];
        categorys.forEach(c => {
          if(smallArr.length === 0){
            bigArr.push(smallArr)
          }
          smallArr.push(c);
          if(smallArr.length === 8){
            smallArr = []
          }
        });
        return bigArr
      }
    },
    watch:{
      categorys () {
        // 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它
        this.$nextTick(() =>{
          new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })

        })
      }

    }

  }
</script>

<style scoped lang="stylus">
 @import "../../common/stylus/mixins.styl"
 .msite  //首页
   width 100%
   .msite_nav
     bottom-border-1px(#e4e4e4)
     margin-top 45px
     height 200px
     background #fff
     .swiper-container
       width 100%
       height 100%
       .swiper-wrapper
         width 100%
         height 100%
         .swiper-slide
           display flex
           justify-content center
           align-items flex-start
           flex-wrap wrap
           .link_to_food
             width 25%
             .food_container
               display block
               width 100%
               text-align center
               padding-bottom 10px
               font-size 0
               img
                 display inline-block
                 width 50px
                 height 50px
             span
               display block
               width 100%
               text-align center
               font-size 13px
               color #666
       .swiper-pagination
         >span.swiper-pagination-bullet-active
           background #02a774

</style>
