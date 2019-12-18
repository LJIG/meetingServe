<template>
  <div id="showPage" :style="autoCover">
    <div
      class="statusTip"
      :style="{background:'green',position:'fixed',top:0,color:'#fff',textAlign:'left',zIndex:'100'}"
    >
      背景主图：{{bgImg}}
      <br />
      背景辅图：{{imgPath}}
      <br />
      视频：{{videoStr}}
      <br />
      音频：{{audioStr}}
      <br />
      playerSrc：{{playerStr}}
      <br />
      主图显示：{{showMainImg}}
      <br />
      player：{{showVIdeo}}
    </div>
    <video-box v-show="this.showVIdeo" :src="playerStr" />
  </div>
</template>

<script>
import {
  GETDATA as Variable, BACKGROUND_IMG, VIDEO_PATH, IMAGE_PATH,
  SHOW_COVER, AUDIO_PATH
} from '@/utils/variable'

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
      playerStr: '',
      audioStr: '',
      showVIdeo: false,
      showMainImg: false
    }
  },
  computed: {
    autoCover () {
      // window.console.log(typeof this.showMainImg)
      const bgImg = this.showMainImg ? this.bgImg : this.imgPath
      return {
        backgroundImage: 'url(' + bgImg + ')',
        backgroundSize: 'auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    }
  },
  mounted () {
    this.info()
  },
  watch: {
    audioStr (newVal) {
      this.playerStr = newVal
    },
    videoStr (newVal) {
      this.playerStr = newVal
    }
  },
  methods: {
    setFunStr () {
      const BG_Img = window.localStorage[BACKGROUND_IMG]
      const video_src = window.localStorage[VIDEO_PATH]
      const IMG_src = window.localStorage[IMAGE_PATH]
      const audio_src = window.localStorage[AUDIO_PATH]

      // 状态监听
      const main_img = window.localStorage[SHOW_COVER]

      if (main_img && main_img != this.showMainImg) {
        let _boolean = JSON.parse(main_img)
        this.changeImg(_boolean)
        this.changeShowBox(false)
      }

      if (audio_src && audio_src != this.audioStr) {
        this.audioStr = audio_src
        this.changeShowBox(false)
      }
      if (BG_Img && BG_Img != this.bgImg) {
        this.bgImg = BG_Img
        this.changeShowBox(false)
        this.changeImg(true)
      }
      if (video_src && video_src != this.videoStr) {
        this.videoStr = video_src
        this.changeShowBox(true)
      }
      if (IMG_src && IMG_src != this.imgPath) {
        this.imgPath = IMG_src
        this.changeShowBox(false)
        this.changeImg(false)
      }
    },
    changeImg (boolean = false) {
      this.showMainImg = boolean
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
    window.addEventListener('unload', function () {
      const store = window.localStorage
      Object.keys(store).forEach(item => {
        window.localStorage.removeItem(item)
      })
    })
  }
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
