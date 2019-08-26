<template>
  <div>
    <div class="title border-bottom">用户评论</div>
    <div class="comment-total">
      <div class="comment-total-star">
        <span class="iconfont light">&#xe61a;&#xe61a;&#xe61a;</span>
        <span class="iconfont dark">&#xe61a;&#xe61a;</span>
      </div>
      Jacle 2019-05-19
    </div>
    <div class="comment-dsc">
      南沙湿地公园，广州的最南端，珠江入海口，这里称为“伶仃洋”，就是文天祥”零丁洋里叹零丁”的地方，水天一色，候鸟天堂，好看。改进建议：坐船游览湿地要另外花费100元，乘坐的人很少，觉得不值，建议稍微提高门票价格，比如七八十元，包含船费，这样比较多；沿着十九涌的道路（海翔哭路）上停满了车，灰尘很大，游客走路也不安全，建议海翔路沿湿地一侧修木栈道，人车分流。
    </div>
    <div class="open"></div>
    <div class="pic">
      <img src="http://img1.qunarzz.com/p/tts1/1806/ce/cec46e4a5fb79502.jpg_228x168_25ac0f4d.jpg">
      <img src="http://img1.qunarzz.com/p/tts1/1806/ce/cec46e4a5fb79502.jpg_228x168_25ac0f4d.jpg">
      <img src="http://img1.qunarzz.com/p/tts1/1806/ce/cec46e4a5fb79502.jpg_228x168_25ac0f4d.jpg">
      <img src="http://img1.qunarzz.com/p/tts1/1806/ce/cec46e4a5fb79502.jpg_228x168_25ac0f4d.jpg">
      <img src="http://img1.qunarzz.com/p/tts1/1806/ce/cec46e4a5fb79502.jpg_228x168_25ac0f4d.jpg">
      <img src="http://img1.qunarzz.com/p/tts1/1806/ce/cec46e4a5fb79502.jpg_228x168_25ac0f4d.jpg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailComment',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
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
    text-align: right
    padding-right: .2rem
    overflow: hidden
    .comment-total-star
      float: left
      .light
        color: #ff9800
      .dark
        position: relative
        color: #ccc
        left: -.07rem
</style>
