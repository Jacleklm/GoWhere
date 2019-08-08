<template>
  <div class="search">
    <input
      class="search-input"
      type="text"
      placeholder="输入城市名称或拼音"
      v-model="keyword"
    >
    <div
      class="search-content"
      ref="search"
      v-show="keyword"
    >
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  },
  activated () {
    this.keyword = ''
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    background: $bgColor
    height: .72rem
    padding: 0 .1rem
    .search-input
      height: .62rem
      line-height: .62rem
      width: 100%
      text-align: center
      box-sizing: border-box
      border-radius: .06rem
      color: #666
      padding: 0 .1rem
  .search-content// 下面这部分也应该看一下
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.56rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      color: #666
      background: #fff
      line-height: .62rem
      padding-left: .2rem
</style>
