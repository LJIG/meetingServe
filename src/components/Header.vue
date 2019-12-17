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
import { SHOW_COVER } from '@/utils/variable.js'
export default {
  components: {},
  props: {},
  data () {
    const buttonArr = [{
      name: '显示主背景',
      bindKey: SHOW_COVER,
      active: false
    }, {
      name: '静音',
      active: false
    }, {
      name: '暂停',
      active: false
    }, {
      name: '音乐',
      active: false
    }, {
      name: '复位',
      active: false
    }, {
      name: '单个循环播放',
      active: false
    }, {
      name: '列表循环播放',
      active: false
    }]
    return {
      buttonArr
    }
  },
  watch: {},
  computed: {},
  methods: {
    bindEvent ({ active: _boolean, bindKey: type }) {
      window.console.log(_boolean, type)
      if (!type) return
      this.postData(type, _boolean)
    },
    postData (type, _boolean) {
      window.localStorage.setItem(type, _boolean)
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