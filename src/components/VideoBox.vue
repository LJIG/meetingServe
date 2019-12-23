<template>
  <div class="wrapper">
    <div id="dplayer"></div>
  </div>
</template>

<script>
import 'dplayer/dist/DPlayer.min.css';
import DPlayer from 'dplayer';
import { DPLAYER_EVENT_NAME } from '@/utils/variable'
export default {
  components: {},
  props: {
    src: {
      type: String,
      default: ''
    },
    eventName: {
      type: String,
      default: () => { }
    }
  },
  data () {
    let playerName = DPLAYER_EVENT_NAME
    let globalObj = {
      playerObj: null,
    }
    Object.keys(playerName).forEach(i => {
      globalObj[playerName[i]] = false
    })
    return globalObj
  },
  watch: {
    src (newval) {
      this.bindNext(newval)
      this._startPlay()
    },
    eventName (newval) {
      this.monitorEventName(newval)
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
    monitorEventName (obj) {
      let jsonObj = JSON.parse(obj)
      let key = Object.keys(jsonObj)[0]
      window.console.log('获取监听对象', obj, JSON.parse(obj))
      if (key == DPLAYER_EVENT_NAME.VOLUME_SIZE) {
        window.console.log('音量')
        if (jsonObj[key]) {
          this._stopVolume()
        } else {
          this._startVolume()
        }
      }
      if (key == DPLAYER_EVENT_NAME.RESET_SEEK) {
        window.console.log('重置')
        this._reset()
      }
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
    },
    _startVolume () {
      let volume = 100
      this.playerObj.volume(volume / 100, true, false)
    },
    _stopVolume () {
      let volume = 100

      let timer = setInterval(() => {
        if (volume == 0) {
          clearInterval(timer)
        }
        volume -= 10
        this.playerObj.volume(volume / 100, true, false)
      }, 200)
    },
    _reset () {
      this.playerObj.seek(0)
    }
  },
  created () {
  },
  mounted () {
    const dp = new DPlayer({
      container: document.getElementById('dplayer'),
      video: {
        url: /* '' */ './audio/陈奕迅 - 阴天快乐.flac'
      },
      loop: true,
      lang: 'zh-cn',
      // hotkey: true,
      hotkey: false,
      logo: './favicon.ico',
      apiBackend: '',
      // highlight: [
      //   {
      //     time: 3,
      //     text: '这是第 3 秒',
      //   },
      //   {
      //     time: 5,
      //     text: '这是 5 秒',
      //   },
      // ],
    })
    this.playerObj = dp
    this.playerObj.play()
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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
}
#dplayer {
  height: 100%;
  width: 100%;
}
</style>