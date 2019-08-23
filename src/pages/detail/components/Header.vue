<template>
  <div>
    <router-link v-show="showAbs" tag="div" to="/" class="iconfont header-icon">&#xe624;</router-link>
    <div class="header" v-show="!showAbs" :style="opacityStyle">
      景点详情
      <router-link tag="div" to="/" class="iconfont header-left">&#xe624;</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 1
      }
    }
  },
  methods: {
    hanedleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 5) {
        let opacity = top / 140
        opacity = opacity === 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.hanedleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.hanedleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    position: fixed
    top: 0
    left: 0
    z-index: 9
    width: 100%
    line-height: $titleHeight
    height: $titleHeight
    background: $bgColor
    color: #fff
    text-align: center
    font-size: .32rem
    .header-left
      padding: 0 .2rem
      font-size: .35rem
      position: absolute
      top: 0
      left: 0
  .header-icon
    position: absolute
    top: .1rem
    left: .1rem
    z-index: 2
    color: #fff
    font-size: .4rem
    text-align: center
    width: .72rem
    line-height: .72rem
    background: rgba(0, 0, 0, .5)
    border-radius: .72rem
</style>
