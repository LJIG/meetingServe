<template>
  <div class="wrapper">
    <el-row>
      <el-col :span="8">
        <el-upload ref="upImg" class="upload-demo" action :before-upload="bindBgImg" :limit="1">
          <el-button size="small" type="success">设置背景主图</el-button>
        </el-upload>
      </el-col>
      <el-col :span="8">
        <el-upload class="upload-demo" action multiple :before-upload="bindImg">
          <el-button size="small" type="primary">添加背景图</el-button>
        </el-upload>
      </el-col>
      <el-col :span="8">
        <el-button size="small" type="danger" @click="bindReset()">重新选择</el-button>
      </el-col>
    </el-row>
    <el-row class="imgList">
      <el-carousel
        :interval="4000"
        type="card"
        height="200px"
        :autoplay="false"
        indicatorPosition="none"
      >
        <el-carousel-item v-for="item in files" :key="item">
          <img :src="item" alt @click="setImg(item)" />
        </el-carousel-item>
      </el-carousel>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { BACKGROUND_IMG, IMAGE_PATH } from '@/utils/variable'
const console = window.console
export default {
  components: {},
  props: {},
  data () {
    const path = window.location.origin
    return {
      basePath: `${path}/image`,
      fileList: []
    }
  },
  watch: {
    fileList (newval) {
      if(newval){
        this.setFile(newval)
      }
    }
  },
  computed: {
    ...mapState('file', {
      files: state => state.imgFiles
    })
  },
  methods: {
    checkImg (file) {
      const isType = file.type === 'image/jpeg' || file.type === 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isType) {
        this.$message.error('上传图片只能是 JPG/PNG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!')
      }
      return isType && isLt2M
    },
    bindImg (file) {
      if (this.checkImg(file)) {
        const path = this.basePath + '/' + file.name
        this.fileList.push(path)
      }
      return false
    },
    bindBgImg (file) {
      if (this.checkImg(file)) {
        const path = this.basePath + '/' + file.name
        console.log(file, path)
        this.postData(BACKGROUND_IMG, path)
        // this.fileSetFile({ type: 'bgImg', path })
      }
      // this.$refs.upImg.abort()
      // this.$refs.upImg.submit()
      // this.$refs.upImg.clearFiles()
      return false
    },
    setImg (path) {
      console.log(IMAGE_PATH, path)
    },
    bindReset(){
      this.setFile([])
    },
    ...mapActions('file', {
      setFile: 'setFiles'
    }),
    postData (type, path) {
      window.localStorage.setItem(type, path)
    }
  },
  created () { },
  mounted () { }
}
</script>
<style scoped>
.wrapper {
  padding-top: 3rem;
  margin: 0px;
  line-height: normal;
}
.imgList {
  margin-top: 3rem;
}
.el-carousel__item img {
  width: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>