<template>
  <div class="hotswiper">
    <div class="hotswiper-title">
      <img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png">
      <span>本周热门榜单</span>
    </div>
    <div class="swiper">
      <swiper :options="swiperOption" v-if="showSwiper">
        <swiper-slide class="swiper-content" v-for="item of list" :key="item.id">
          <img class="swiper-content-img" :src="item.imgUrl">
          <div class="swiper-content-title">{{item.title}}</div>
          <span class="swiper-content-price">￥{{item.price}}</span><span>&nbsp;起</span>
        </swiper-slide>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHotswiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        loop: false,
        slidesPerView: 3.3,
        spaceBetween: 10,
        scrollbar: '.swiper-scrollbar',
        freeMode: true,
        freeModeFluid: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .hotswiper-title
    background: $titleColor
    font-size: .32rem
    height: $contentTitleHeight
    line-height: $contentTitleHeight
    .title-img
      margin-left: 0.2rem
      width: .3rem
      height: .3rem
      padding-bottom: .1rem
  .swiper
    margin: .2rem 0 .2rem .2rem
    .swiper-content
      text-align: center
      font-size: .2rem
      .swiper-content-img
        width: 100%
      .swiper-content-title
        color: black
        line-height: .4rem
        ellipsis()
      .swiper-content-price
        color: rgb(255, 131 0)
</style>
