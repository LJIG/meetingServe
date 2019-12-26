<template>
  <div class="wrapper">
    <el-row>
      <el-col :span="5">
        <div class="grid-content bg-purple logo">
          <img src alt="LOGO" />
        </div>
      </el-col>
      <el-col :span="19">
        <div class="grid-content bg-purple-light btns">
          <el-button
            round
            v-for="(item,key) in buttonArr"
            :type="item.active?'primary':''"
            :key="key"
            @click="item.active=!item.active,bindEvent(item)"
          >{{item.name}}</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { SHOW_COVER, DPLAYER_EVENT, DPLAYER_EVENT_NAME } from '@/utils/variable.js'
export default {
  components: {},
  props: {},
  data () {
    const dplayer_name = DPLAYER_EVENT_NAME
    const buttonArr = [{
      name: '显示主背景',
      bindKey: SHOW_COVER,
      active: false
    }, {
      name: '静音',
      bindKey: DPLAYER_EVENT,
      bindKeyName: dplayer_name.VOLUME_SIZE,
      active: false
    }, {
      name: '暂停',
      bindKey: DPLAYER_EVENT,
      bindKeyName: dplayer_name.STOP_PLAY,
      active: false
    }, /* {
      name: '音乐',
      active: false
    },  */{
      name: '复位',
      bindKey: DPLAYER_EVENT,
      bindKeyName: dplayer_name.RESET_SEEK,
      active: false
    }/* , {
      name: '单个循环播放',
      active: false
    }, {
      name: '列表循环播放',
      active: false
    } */]
    return {
      buttonArr
    }
  },
  watch: {},
  computed: {},
  methods: {
    bindEvent ({ active: _boolean, bindKey: type, bindKeyName }) {
      if (!type) return
      if (type == DPLAYER_EVENT) {
        const deliverObj = { [bindKeyName]: _boolean }
        this.postData(type, JSON.stringify(deliverObj))
        return
      }
      this.postData(type, _boolean)
    },
    postData (type, deliver) {
      window.localStorage.setItem(type, deliver)
    }
  },
  created () { },
  mounted () { }
}
</script>
<style scoped>
.wrapper {
  padding: 0px;
  margin: 0px;
}
</style>