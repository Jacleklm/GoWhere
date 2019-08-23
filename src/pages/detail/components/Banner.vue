<template>
  <div>
    <div class="banner">
      <img
        class="banner-img"
        :src="list.bannerImg"
      >
      <div class="banner-info">
        <span class="iconfont banner-icon">&#xe663;&nbsp;9</span>
        <div class="banner-title">{{list.sightName}}</div>
      </div>
      <div class="banner-fade"></div>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner',
  props: {
    list: Object,
    gallaryImgs: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .banner
    position: relative
    .banner-img
      width: 100%
    .banner-info
      z-index: 2
      position: absolute
      bottom: .3rem
      left: .2rem
      color: #fff
      .banner-icon
        display: inline-block
        background: rgba(0, 0, 0, .5)
        border-radius: .2rem
        font-size: .24rem
        line-height: .4rem
        text-align: center
        padding: 0 .4rem 0 .4rem
      .banner-title
        margin-top: .1rem
        font-size: .36rem
        line-height: .5rem
      .banner-back
        z-index: 9
        position: absolute
        top: .3rem
        left: .2rem
    .banner-fade
      z-index: 1.5
      position: absolute
      bottom: 0rem
      width: 100%
      height: 11%
      background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1))
  .content
    height: 15rem
    background: #ccc
</style>
