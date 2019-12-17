<template>
  <div id="showPage" :style="autoCover">
    <!-- <img alt="Vue logo" :src="imgPath" /> -->
    <!-- <div :style="ImgCover" /> -->
    <video-box v-if="this.showVIdeo" :src="videoStr" />
  </div>
</template>

<script>
import { GETDATA as Variable, BACKGROUND_IMG, VIDEO_PATH, IMAGE_PATH } from '@/utils/variable'
import VideoBox from '@/components/VideoBox'
export default {
  name: 'showPage',
  components: {
    VideoBox
  },
  data () {
    return {
      funStr: '',
      changeModel: '',
      bgImg: '/image/logo.png',
      imgPath: '',
      videoStr: '',
      showVIdeo: false,
      showMainImg: false
    }
  },
  computed: {
    autoCover () {
      return {
        backgroundImage: 'url(' + (this.showMainImg ? this.bgImg : this.imgPath) + ')',
        backgroundSize: 'auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    },
    // ImgCover () {
    //   return {
    //     backgroundImage: 'url(' + this.imgPath + ')',
    //     backgroundSize: 'auto',
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat',
    //     display: this.showImg ? 'none' : '',
    //     height: '100%',
    //     backgroundColor: '#000'
    //   }
    // }
  },
  mounted () {
    this.info()
  },
  methods: {
    setFunStr () {
      const BG_Img = window.localStorage[BACKGROUND_IMG]
      const video_src = window.localStorage[VIDEO_PATH]
      const IMG_src = window.localStorage[IMAGE_PATH]
      if (BG_Img && BG_Img != this.bgImg) {
        this.bgImg = BG_Img
        this.changeShowBox(false)
        this.changeImg(true)
      }
      if (video_src && video_src != this.videoStr) {
        this.videoStr = video_src
        this.changeShowBox(true)
        this.changeImg(false)
      }
      if (IMG_src && IMG_src != this.imgPath) {
        this.imgPath = IMG_src
        this.changeShowBox(false)
        this.changeImg(false)
      }
    },
    changeImg (boolean = false) {
      this.showMainImg = boolean
      window.console.log(this.imgPath, boolean)
    },
    changeShowBox (boolean = false) {
      // return boolean
      this.showVIdeo = boolean
      // this.changeModel = this.showVIdeo //'VIDEO' || 'IMG'
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
