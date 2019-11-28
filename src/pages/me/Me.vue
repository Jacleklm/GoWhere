<template>
  <div>
    恭喜你成功登录，用户：{{this.Authorization.username}}
    <div>
      想换个账号？ 试一下
      <span @click="logout">退出登录</span>
    </div>
  </div>
</template>

<script>
// import LoginHeader from './components/Header'
// import LoginInput from './components/Input'
// import axios from '@/api/axios.js'
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['Authorization', 'city'])
  },
  data () {
    return {
      username: '没拿到数据'
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
</style>
