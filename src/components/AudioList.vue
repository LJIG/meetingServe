<template>
  <div class="wrapper">
    <el-row>
      <el-col :span="12">
        <el-upload ref="upImg" class="upload-demo" action :before-upload="bindVideo" multiple>
          <el-button size="small" type="success">添加音乐</el-button>
        </el-upload>
      </el-col>
      <el-col :span="12">
        <el-button size="small" type="danger" @click="bindReset()">重新选择</el-button>
      </el-col>
    </el-row>
    <el-row>
      <ul>
        <li v-for="(item,index) in fileArr" :key="index" @click="setAudio(item)">{{item}}</li>
      </ul>
    </el-row>
  </div>
</template>

<script>
import { AUDIO_PATH } from '@/utils/variable.js'
export default {
  components: {},
  props: {},
  data () {
    let path = window.location.origin
    return {
      basePath: `${path}/audio`,
      fileArr: []
    }
  },
  watch: {
    fileArr (newVal) {
      if (newVal) {
        // widnow.console.log(this.fileArr)
      }
    }
  },
  computed: {},
  methods: {
    checkFile (file) {
      const isType = file.type === 'audio/mp3' //|| file.type === 'image/png'
      if (!isType) {
        this.$message.error('所选文件只能是 audio/mp3 格式!')
      }
      return isType
    },
    bindVideo (file) {
      if (this.checkFile(file)) {
        const path = this.basePath + '/' + file.name
        this.fileArr.push(path)
      }
      return false
    },
    bindReset () { },
    setAudio (path) {
      window.localStorage.setItem(AUDIO_PATH, path)
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
li {
  line-height: inherit;
}
</style>