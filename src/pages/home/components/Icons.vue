<template>
  <div class="container border-bottom">
    <swiper :options="swiperOption">
      <swiper-slide
        class="swiper-content"
        v-for="(item,index) of pages"
        :key="index"
      >
        <div
          class="icons-wrapper"
          v-for="innerItem of item"
          :key="innerItem.id"
        >
          <div class="icon-content"><img class="icon-content-img" :src="innerItem.imgUrl"></div>
          <p>{{innerItem.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    padding-top: .08rem
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 46%
    .icons-wrapper
      float: left
      width: 25%
      text-align: center
      .icon-content
        padding: .12rem 0 .1rem 0
        .icon-content-img
          width: 58.6%
</style>
