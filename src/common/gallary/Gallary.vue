<template>
  <div class="gallary" @click="handleClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide
          class="swiper-content"
          v-for="item of list"
          :key="item.index"
        >
          <img class="swiper-content-img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .gallary >>> .swiper-container
    overflow: inherit
  .gallary
    z-index: 99
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: #000
    display: flex
    flex-direction: column
    justify-content: center
    .wrapper
      width: 100%
      height: 0
      padding-bottom: 100%
      .swiper-content-img
        width: 100%
  .swiper-pagination
    color: #fff
    bottom: -1rem
</style>
