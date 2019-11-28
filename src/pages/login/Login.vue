<template>
  <div>
    <login-header></login-header>
    <login-input></login-input>
  </div>
</template>

<script>
import LoginHeader from './components/Header'
import LoginInput from './components/Input'
import axios from '@/api/axios.js'
// import { mapState } from 'vuex'
export default {
  name: 'Login',
  components: {
    LoginHeader,
    LoginInput
  },
  data () {
    return {
      title: '没得到'
    }
  },
  methods: {
    getLoginInfo () {
      axios.get('/api/json')
        .then(this.getLoginInfoReso)
    },
    getLoginInfoReso (res) {
      res = res.data
      if (res) {
        const data = res
        this.title = data
      }
    }
  },
  mounted () {
    this.getLoginInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
