<template>
  <div id="showPage">
    <img alt="Vue logo" :src="bgImg" />
    <h2>主屏幕</h2>
    <!-- -{{funStr}}- -->
  </div>
</template>

<script>
import { GETDATA as Variable } from '@/utils/variable'
export default {
  name: 'showPage',
  components: {
  },
  data () {
    return {
      funStr: '',
      bgImg: '@/assets/logo.png'
    }
  },
  computed: {
  },
  mounted () {
    this.info()
  },
  methods: {
    setFunStr () {
      const now = window.localStorage[Variable]
      if (now && now != this.funStr) {
        this.funStr = now
        this.bgImg = now
        window.console.log(now)
      }
    },
    changeStore () {
      setInterval(() => { this.setFunStr() }, 1000)
    },
    info () {
      this.funStr = window.localStorage[Variable]
      this.changeStore()
    }
  },
  created () {
  },
}
</script>

<style>
#showPage {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
