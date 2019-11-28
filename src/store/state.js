let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity,
  // 存储token和username
  Authorization: {
    // localStorage的getItem() 方法
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    username: localStorage.getItem('username') ? localStorage.getItem('username') : ''
  }
}
