<template>
  <div class="wrapper">
    <el-row>
      <el-col :span="12">
        <el-upload ref="upImg" class="upload-demo" action :before-upload="bindVideo" multiple>
          <el-button size="small" type="success">添加视频</el-button>
        </el-upload>
      </el-col>
      <el-col :span="12">
        <el-button size="small" type="danger" @click="bindReset()">重新选择</el-button>
      </el-col>
    </el-row>
    <el-row>
      <ol>
        <li v-for="(item,index) in fileArr" :key="index">
          <el-row>
            <el-col :span="1">{{index + 1}}.</el-col>
            <el-col :span="14">
              <span @click="setVideo(item)">{{item.name}}</span>
            </el-col>
            <el-col :span="9">
              <el-button @click="deleteItem(index)">删除</el-button>
              <el-button @click="openChangeName(item,index)">改名</el-button>
            </el-col>
          </el-row>
        </li>
      </ol>
    </el-row>
  </div>
</template>

<script>
// let console = window.console
import { VIDEO_PATH } from '@/utils/variable.js'
export default {
  components: {},
  props: {},
  data () {
    // let path = window.location.origin
    return {
      basePath: `${window.localStorage.originPath}/video`,
      fileArr: []
    }
  },
  watch: {
    fileArr (newVal) {
      if (newVal) {
        // console.log(this.fileArr)
      }
    }
  },
  computed: {},
  methods: {
    openChangeName (item, index) {
      const { name } = item
      const type = 'EDITOR'
      this.$prompt('', '修改名称', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputValue: name,
        inputErrorMessage: '修改失败'
      }).then(({ value }) => {
        this.editorData({ name: value, index, type })
        this.$message({
          type: 'success',
          message: '新的名称: ' + value
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消修改'
        });
      });
    },
    deleteItem (index) {
      const type = "DELETE"
      this.editorData({ type, index })
    },
    getFileObj (_name) {
      const findArr = _name.split('.')
      const type = findArr[findArr.length - 1]
      const regexp = RegExp(`\\.${type}$`)
      const name = _name.replace(regexp, '')
      return { type, name, originalName: _name }
    },
    editorData (editorObj) {
      const { type, name, index } = editorObj
      let _tempArr = this.fileArr
      if (type == 'EDITOR') {
        _tempArr[index].name = name
      }
      if (type == "DELETE") {
        let arr = []
        _tempArr.forEach((i, _index) => {
          if (index != _index) {
            arr.push(i)
          }
        })
        _tempArr = arr
      }
      this.fileArr = _tempArr
    },
    checkFile (file) {
      const isType = file.type === 'video/mp4' //|| file.type === 'image/png'
      if (!isType) {
        this.$message.error('所选文件只能是 Video/mp4 格式!')
        return false
      }
      return isType
    },
    bindVideo (file) {
      if (this.checkFile(file)) {
        const fileName = file.name
        const obj = this.getFileObj(fileName)
        this.fileArr.push(obj)
      }
      return false
    },
    bindReset () {
      this.$confirm('', '此操作将删除所有文件, 是否继续?', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.fileArr = []
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    setVideo (path) {
      let _path = this.basePath + '/' + path.originalName
      window.localStorage.setItem(VIDEO_PATH, _path)
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
  line-height: normal;
  text-align: left;
  list-style: none;
}
</style>