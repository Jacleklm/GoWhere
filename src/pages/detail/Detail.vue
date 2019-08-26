<template>
  <div>
    <detail-header></detail-header>
    <detail-banner :list="bannerList" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-recommend :list="recommendList"></detail-recommend>
    <detail-comment :list="categoryList"></detail-comment>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailComment from './components/Comment'
import DetailRecommend from './components/Recommend'
import axios from 'axios'
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
      recommendList: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json')//  获取Ajax数据可以用的方法，去请求一个url（即是括号里的内容）
        .then(this.getDetailInfoReso)//  axios返回的是一个promise对象，所以可以用then方法
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
