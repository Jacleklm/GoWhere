<template>
  <div>
    <detail-header></detail-header>
    <detail-banner :list="bannerList" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-recommend :list="recommendList"></detail-recommend>
    <detail-comment :list="commentList"></detail-comment>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailComment from './components/Comment'
import DetailRecommend from './components/Recommend'
import axios from '@/api/axios.js'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailRecommend,
    DetailComment
  },
  data () {
    return {
      bannerList: {},
      gallaryImgs: [],
      categoryList: [],
      recommendList: [],
      commentList: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/getDetial')
        .then(this.getDetailInfoReso)
    },
    getDetailInfoReso (res) {
      res = res.data
      if (res.ret && res.data) {
        res = res.data.detail
        res.forEach((item) => {
          if (item.id === this.$route.params.id) {
            this.bannerList = item.bannerList
            this.gallaryImgs = item.gallaryImgs
            this.categoryList = item.categoryList
            this.recommendList = item.recommendList
            this.commentList = item.commentList
          }
        })
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style scoped>

</style>
