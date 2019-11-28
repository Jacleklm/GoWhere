<template>
  <div class="wrapper">
    <div class="input">
      <div class="input-phone">
        <span>账号</span> <input type="text" v-model="loginForm.username" class="phone" placeholder="请输入账号">
      </div>
      <div class="input-check">
        <span class="check-left">密码</span> <input type="password" v-model="loginForm.password" class="check" placeholder="请输入密码">
        <!-- <div class="getcheck">获取验证码</div> -->
      </div>
    </div>
    <div class="login" @click="login">登录</div>
    <p>登录即同意去哪儿 <a href="https://touch.qunar.com/h5/about?action=rules">用户服务协议</a> 和 <a href="https://m.qunar.com/zhuanti/20170210_privacy.html?source=touch">用户服务协议</a></p>
  </div>
</template>

<script>
import axios from '@/api/axios.js'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'LoginInput',
  computed: {
    ...mapState(['Authorization', 'city'])
  },
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapMutations(['changeLogin']),
    login () {
      let _this = this
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        alert('账号密码不能为空')
      } else {
        axios({
          method: 'post',
          url: '/api/user/login',
          data: _this.loginForm // post传输的用data，而不是body？还是都可以
        }).then(res => {
          // console.log(res.data)
          _this.userToken = res.data.token
          _this.username = res.data.username
          // console.log({ token: _this.userToken, username: _this.username })
          _this.changeLogin({ token: _this.userToken, username: _this.username })
          _this.$router.push('/me')
          alert('登陆成功')
        })
        // 如果有的正式验证的话在这里会判断返回的信息的code是0还是-1
      }
    }
  }
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
      background-color: $bgColor
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
