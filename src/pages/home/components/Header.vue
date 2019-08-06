<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont icon-back">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont icon-choose">&#xe7d2;</span>&nbsp;输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      广州
      <span class="iconfont icon-choose">&#xe65a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles'
  .header
    width: 100%
    line-height: $titleHeight
    height: $titleHeight
    background: $bgColor
    display: flex
    color: #fff
    .header-left
      padding: 0 .2rem
      .icon-back
        font-size: .35rem
    .header-right
      padding: 0 .1rem 0 .2rem
      margin-top: -.08rem
      .icon-choose
        font-size: .5rem
        margin-left: -.15rem
    .header-input
      text-indent: .2rem
      line-height: .64rem
      height: .64rem
      flex: 1
      background: #fff
      color: #cccccc
      border-radius: .1rem
      margin: .12rem 0 .1rem 0
</style>
