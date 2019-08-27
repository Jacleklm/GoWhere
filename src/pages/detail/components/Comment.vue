<template>
  <div class="wrapper">
    <div class="title border-bottom">用户评论</div>
    <div class="border-bottom">
      <div class="comment-total">
        <div class="comment-total-star">
          <span class="iconfont light">&#xe61a;&#xe61a;&#xe61a;</span>
          <span class="iconfont dark">&#xe61a;&#xe61a;</span>
        </div>
        Jacle 2019-05-19
      </div>
      <div class="comment-dsc">
        野生动物园非常的大，动物种类非常的多，一天带孩子走下来，几个景点没有逛到。小火车非常的不错，可以近距离观看动物。排队用了1:30小时，缆车没去做，太浪费时间了，实在太多人了。建议开园就进去观看。大马戏非常值得观看，票价贵是有道理的，杂技演员非常的厉害👍👍👍
        我是多余的多余的多余的我是多余的多余的多余的我是多余的多余的多余的我是多余的多余的多余的我是多余的多余的多余的
      </div>
      <div class="open" @click="changeShowAll">
        <span class="iconfont" v-show="showAll">&#xe62e;</span>
        <span class="iconfont" v-show="!showAll">&#xe62d;</span>
      </div>
      <div class="pic">
        <img class="pic-content" src="http://img1.qunarzz.com/p/tts1/1806/ce/cec46e4a5fb79502.jpg_228x168_25ac0f4d.jpg">
        <img class="pic-content" src="http://img1.qunarzz.com/p/tts1/1806/ce/cec46e4a5fb79502.jpg_228x168_25ac0f4d.jpg">
        <img class="pic-content" src="http://img1.qunarzz.com/p/tts1/1806/ce/cec46e4a5fb79502.jpg_228x168_25ac0f4d.jpg">
        <img class="pic-content" src="http://img1.qunarzz.com/p/tts1/1806/ce/cec46e4a5fb79502.jpg_228x168_25ac0f4d.jpg">
        <img class="pic-content" src="http://img1.qunarzz.com/p/tts1/1806/ce/cec46e4a5fb79502.jpg_228x168_25ac0f4d.jpg">
        <img class="pic-content" src="http://img1.qunarzz.com/p/tts1/1806/ce/cec46e4a5fb79502.jpg_228x168_25ac0f4d.jpg">
      </div>
    </div>
    <div class="border-bottom">
      <div class="comment-total">
        <div class="comment-total-star">
          <span class="iconfont light">&#xe61a;&#xe61a;&#xe61a;</span>
          <span class="iconfont dark">&#xe61a;&#xe61a;</span>
        </div>
        Jacle 2019-05-19
      </div>
      <div class="comment-dsc">
        野生动物园非常的大，动物种类非常的多，一天带孩子走下来，几个景点没有逛到。小火车非常的不错，可以近距离观看动物。排队用了1:30小时，缆车没去做，太浪费时间了，实在太多人了。建议开园就进去观看。大马戏非常值得观看，票价贵是有道理的，杂技演员非常的厉害👍👍👍
        我是多余的多余的多余的我是多余的多余的多余的我是多余的多余的多余的我是多余的多余的多余的我是多余的多余的多余的
      </div>
      <div class="open" @click="changeShowAll">
        <span class="iconfont" v-show="showAll">&#xe62e;</span>
        <span class="iconfont" v-show="!showAll">&#xe62d;</span>
      </div>
      <div class="pic">
        <img class="pic-content" src="http://img1.qunarzz.com/p/tts1/1806/ce/cec46e4a5fb79502.jpg_228x168_25ac0f4d.jpg">
        <img class="pic-content" src="http://img1.qunarzz.com/p/tts1/1806/ce/cec46e4a5fb79502.jpg_228x168_25ac0f4d.jpg">
        <img class="pic-content" src="http://img1.qunarzz.com/p/tts1/1806/ce/cec46e4a5fb79502.jpg_228x168_25ac0f4d.jpg">
        <img class="pic-content" src="http://img1.qunarzz.com/p/tts1/1806/ce/cec46e4a5fb79502.jpg_228x168_25ac0f4d.jpg">
        <img class="pic-content" src="http://img1.qunarzz.com/p/tts1/1806/ce/cec46e4a5fb79502.jpg_228x168_25ac0f4d.jpg">
        <img class="pic-content" src="http://img1.qunarzz.com/p/tts1/1806/ce/cec46e4a5fb79502.jpg_228x168_25ac0f4d.jpg">
      </div>
    </div>
    <div class="iconfont allcomment">查看全部评论&#xe62f;</div>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailComment',
  props: {
    list: Array
  },
  components: {
    CommonGallary
  },
  data () {
    return {
      showAll: true
    }
  },
  methods: {
    changeShowAll () {
      this.showAll = !this.showAll
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .wrapper
    border-bottom: .2rem solid rgb(245, 245, 245)
  .title
    color: #333
    height: .88rem
    line-height: .88rem
    font-size: .3rem
    text-indent: .4rem
  .title::after
    content: " ";
    position: absolute;
    top: .30rem;
    left: .2rem;
    width: .06rem;
    height: .25rem;
    background: #1ba9ba;
    -webkit-border-radius: .04rem;
    -moz-border-radius: .04rem;
    border-radius: .04rem;
  .comment-total
    padding: .3rem .2rem .1rem .2rem
    text-align: right
    padding-right: .2rem
    overflow: hidden
    line-height: .32rem
    font-size: .24rem
    .comment-total-star
      float: left
      font-size: .24rem
      .light
        color: #ff9800
        font-size: .24rem
      .dark
        font-size: .24rem
        position: relative
        color: #ccc
        left: -.07rem
  .comment-dsc
    height: 2.1rem
    overflow: hidden
    padding: 0 .2rem 0 .2rem
    font-size: .26rem
    line-height: .42rem
    color: #616161
  .open
    text-align: center
    line-height: .4rem
    color: #9e9e9e
  .pic
    display: flex
    flex-direction: row
    flex-wrap: wrap
    padding: .2rem
    width: 100%
    .pic-content
      width: 30%
      padding: 0 .1rem .1rem 0
  .allcomment
    color: #616161
    text-align: center
    line-height: .8rem
    font-size: .3rem
    border-top: .02rem dashed #bebebe
</style>
