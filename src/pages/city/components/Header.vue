<template>
  <div class="header">
    城市选择
    <router-link tag="div" to="/" class="iconfont header-left">&#xe624;</router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    width: 100%
    line-height: $titleHeight
    height: $titleHeight
    background: $bgColor
    color: #fff
    text-align: center
    font-size: .32rem
    position: relative
    .header-left
      padding: 0 .2rem
      font-size: .35rem
      position: absolute
      top: 0
      left: 0
</style>
