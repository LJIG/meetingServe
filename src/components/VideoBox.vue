<template>
  <div class="wrapper">
    <div id="dplayer"></div>
    <!-- <button class="nextBtn" @click="bindNext('./video/7557ec8406772f867ea8d30f70cd1c9f.mp4')">Next</button> -->
  </div>
</template>

<script>
import 'dplayer/dist/DPlayer.min.css';
import DPlayer from 'dplayer';
export default {
  components: {},
  props: {
    src: {
      type: String,
      default: ''
    },
  },
  data () {
    return {
      playerObj: null
    }
  },
  watch: {
    src (newval) {
      this.bindNext(newval)
      this._startPlay()
      window.console.log(newval)
    }
  },
  computed: {},
  methods: {
    bindNext (url) {
      if (this.playerObj === null) {
        return
      }
      this.playerObj.switchVideo({ url })
    },
    _startPlay () {
      this.playerObj.play()
      this.playerObj.fullScreen.request('browser');
    },
    _stopPlay () {
      this.playerObj.pause()
    },
    setVolume (percentage) {
      this.playerObj.volume(percentage, true, false)
    }
  },
  created () {
  },
  mounted () {
    const dp = new DPlayer({
      container: document.getElementById('dplayer'),
      video: {
        url: './audio/陈奕迅 - 阴天快乐.flac'
      },
      loop: true,
      lang: 'zh-cn',
      // hotkey: true,
      hotkey: false,
      logo: './favicon.ico',
      apiBackend: '',
      highlight: [
        {
          time: 3,
          text: '这是第 3 秒',
        },
        {
          time: 5,
          text: '这是 5 秒',
        },
      ],
    })
    this.playerObj = dp
    window.console.log(dp)
  }
}
</script>
<style scoped>
.wrapper {
  padding: 0px;
  margin: 0px;
  width: 100vw;
  height: 100vh;
}
#dplayer {
  height: 100%;
  width: 100%;
}
</style>