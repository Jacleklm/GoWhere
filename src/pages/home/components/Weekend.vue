<template>
  <div class="weekend">
    <div class="weekend-title">
      <span>周末去哪儿</span>
    </div>
    <div
      class="weekend-content border-bottom"
      v-for="item of list"
      :key="item.id"
    >
      <div class="content-img"><img class="content-img-in" :src="item.imgUrl"></div>
      <div class="content-desc">
        <p class="content-desc-title">{{item.title}}</p>
        <p class="content-desc-desc">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .weekend-title
    background: $titleColor
    font-size: .32rem
    height: $contentTitleHeight
    line-height: $contentTitleHeight
    text-indent: .2rem
  .border-bottom
    border-color: #ccc
  .weekend-content
    width: 100%
    height: 4.2rem
    overflow: hidden
    .content-img
      width: 100%
      overflow: hidden
      height: 0
      width: 100%
      padding-bottom: 36.64%
      .content-img-in
        width: 100%
    .content-desc
      margin-top: .1rem
      text-indent: .2rem
      .content-desc-title
        font-size: .3rem
        line-height: .8rem
      .content-desc-desc
        font-size: .2rem
        color: #616161
        ellipsis()
</style>
