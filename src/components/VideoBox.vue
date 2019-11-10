<template>
  <div class="wrapper">
    <div id="dplayer"></div>
    <button class="nextBtn" @click="bindNext">Next</button>
  </div>
</template>

<script>
import 'dplayer/dist/DPlayer.min.css';
import DPlayer from 'dplayer';
export default {
  components: {},
  props: {},
  data () {
    return {
      playerObj: null
    }
  },
  watch: {},
  computed: {},
  methods: {
    bindNext () {
      if (this.playerObj === null) {
        return
      }
      this.playerObj.switchVideo({ url: './video/7557ec8406772f867ea8d30f70cd1c9f.mp4' })
    }
  },
  created () {
  },
  mounted () {
    const dp = new DPlayer({
      container: document.getElementById('dplayer'),
      video: {
        // url: '7557ec8406772f867ea8d30f70cd1c9f.mp4',
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
}
#dplayer {
  height: 50vh;
}
</style>