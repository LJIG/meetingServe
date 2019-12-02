<template>
  <div id="showPage" :style="autoCover">
    <!-- <img v-show="false" alt="Vue logo" :src="bgImg" /> -->
    <video-box v-show="showVIdeo" :src="videoStr" />
  </div>
</template>

<script>
import { GETDATA as Variable, BACKGROUND_IMG, VIDEO_PATH } from '@/utils/variable'
import VideoBox from '@/components/VideoBox'
export default {
  name: 'showPage',
  components: {
    VideoBox
  },
  data () {
    return {
      funStr: '',
      bgImg: '/image/logo.png',
      videoStr: '',
      showVIdeo: true
    }
  },
  computed: {
    autoCover () {
      return {
        backgroundImage: 'url(' + this.bgImg + ')',
        backgroundSize: 'auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    }
  },
  mounted () {
    this.info()
  },
  methods: {
    setFunStr () {
      const BG_Img = window.localStorage[BACKGROUND_IMG]
      const video_src = window.localStorage[VIDEO_PATH]
      if (BG_Img && BG_Img != this.bgImg) {
        this.bgImg = BG_Img
        this.changeShowBox(false)
      }
      if (video_src && video_src != this.videoStr) {
        this.videoStr = video_src
        this.changeShowBox(true)
      }
    },

    changeShowBox (boolean = false) {
      // return boolean
      this.showVIdeo = boolean
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
* {
  padding: 0;
  margin: 0;
}
</style>

<style scoped>
#showPage {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #000;
  height: 100vh;
  width: 100vw;
}
</style>
