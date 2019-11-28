<template>
  <div class="wrapper">
    <div class="input">
      <div class="input-phone">
        <span>账号</span> <input type="number" class="phone" placeholder="请输入账号">
      </div>
      <div class="input-check">
        <span class="check-left">密码</span> <input type="password" class="check" placeholder="请输入密码">
        <!-- <div class="getcheck">获取验证码</div> -->
      </div>
    </div>
    <div class="login">登录</div>
    <p>登录即同意去哪儿 <a href="https://touch.qunar.com/h5/about?action=rules">用户服务协议</a> 和 <a href="https://m.qunar.com/zhuanti/20170210_privacy.html?source=touch">用户服务协议</a></p>
  </div>
</template>

<script>
export default {
  name: 'LoginInput'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .wrapper
    height: 94.2vh - $titleHeight
    background-color: #f3f9fc
    .input
      margin-top: .2rem
      font-size: .3rem
      background-color: white
      .input-phone
        padding: 0 0 0 .3rem
        line-height: $titleHeight
        color: $bgColor
        border-top: solid 1px #CCCCCC
        span
          padding: 0 .9rem 0 0
      .input-check
        padding: 0 0 0 .3rem
        line-height: $titleHeight
        color: $bgColor
        border-bottom: solid 1px #CCCCCC
        border-top: solid 1px #DDDDDD
        .check-left
          padding: 0 .9rem 0 0
        .getcheck
          border: solid 1px #CCCCCC
          color: #DADFE8
          border-radius: .03rem
          display: inline-block
          line-height: .5rem
          padding 0 .1rem
    .login
      line-height: $titleHeight
      text-align: center
      border-radius: .03rem
      background-color: #85D1DB
      color: white
      font-size: .3rem
      margin: .3rem .2rem
    p
      color: #9e9e9e
      text-align: center
      a
        color: #9e9e9e
        text-decoration: underline
</style>
