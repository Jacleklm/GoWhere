<template>
  <div class="recommmend">
    <div class="recommmend-title">
      <img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png">
      <span>猜你喜欢</span>
    </div>
    <router-link tag="div" :to="'/detail/'+item.id"
      class="recommmend-content border-bottom"
      v-for="item of list"
      :key="item.id"
    >
      <div class="content-img"><img class="content-img-in" :src="item.imgUrl"></div>
      <div class="content-desc">
        <p class="content-desc-title">{{item.title}}</p>
        <p class="content-desc-desc">{{item.desc}}</p>
        <span class="content-desc-detail">查看详情</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .recommmend-title
    background: $titleColor
    font-size: .32rem
    height: $contentTitleHeight
    line-height: $contentTitleHeight
    .title-img
      margin-left: 0.2rem
      width: .3rem
      height: .3rem
      padding-bottom: .1rem
  .border-bottom
    border-color: #ccc
  .recommmend-content
    width: 100%
    height: 2.5rem
    overflow: hidden
    .content-img
      margin: .25rem
      float: left
      overflow: hidden
      height: 0
      width: 26.667%
      padding-bottom: 26.667%
      .content-img-in
        width: 100%
    .content-desc
      float: left
      width: 60%
      margin-top: .3rem
      .content-desc-title
        font-size: .32rem
        display: block
        line-height: .8rem
      .content-desc-desc
        font-size: .2rem
        color: rgb(255, 85, 85)
        ellipsis()
        margin-bottom: .2rem
      .content-desc-detail
        background: #ff9300
        padding: .05rem .2rem
        line-height: .44rem
        border-radius: .06rem
        color: #fff
</style>
