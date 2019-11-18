<template>
  <div id="showPage">
    <img alt="Vue logo" :src="bgImg" />
    <h2>主屏幕</h2>
    <video-box />
  </div>
</template>

<script>
import { GETDATA as Variable, BACKGROUND_IMG } from '@/utils/variable'
import VideoBox from '@/components/VideoBox'
export default {
  name: 'showPage',
  components: {
    VideoBox
  },
  data () {
    return {
      funStr: '',
      bgImg: './image/logo.png'
    }
  },
  computed: {
  },
  mounted () {
    this.info()
  },
  methods: {
    setFunStr () {
      // const now = window.localStorage[Variable]
      // if (now && now != this.funStr) {
      //   this.funStr = now
      //   this.bgImg = now
      //   window.console.log(now)
      // }
      const BG_Img = window.localStorage[BACKGROUND_IMG]
      if (BG_Img && BG_Img != this.bgImg) {
        this.bgImg = BG_Img
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
