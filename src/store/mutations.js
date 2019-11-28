export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  },
  changeLogin (state, Authorization) {
    // 存进state和localStorage中
    state.Authorization = Authorization
    localStorage.setItem('token', Authorization.token)
    localStorage.setItem('username', Authorization.username)
  }
}
