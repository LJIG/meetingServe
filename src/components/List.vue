<template>
  <div class="wrapper">
    <button @click="setFile()">修改lfiles</button>
    name {{name}}
    <br />
    files {{files}}
    <br />
    <button @click="getFile()">背景图</button>
    <input type="file" id="files" name="files[]" multiple @change="handleFileSelect" />
    <output>
      <ul>
        <li v-for="(item,index) in fileList" :key="index">
          <span>{{escape(item.name)}}</span> -
          <span>{{item.type}}</span> -
          <span>{{item.size}}</span>
        </li>
      </ul>
    </output>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  components: {},
  props: {},
  data () {
    return {
      fileList: []
    }
  },
  watch: {
    fileList () {
    }
  },
  computed: {
    ...mapState({
      name: state => state.name,
    }),
    ...mapState('file', {
      files: state => state.files
    })
  },
  methods: {
    ...mapActions('file',{
      fileSetFile: 'setFiles'
    }),
    escape (str) {
      return window.escape(str)
    },
    handleFileSelect (evt) {
      var files = evt.target.files;
      window.console.log(files)
      var output = [];
      for (var i = 0, len = files.length; i < len; i++) {
        let f = files[i]
        output.push(f)
      }
      this.fileList = output
    },
    getFile () {
      const list = this.fileList

      list.forEach(i => {
        let reader = new FileReader()
        reader.readAsDataURL(i)
        reader.onload = function () {
          window.console.log(this.result)
        }
      })
    },
    setFile () {
      this.fileSetFile([3456])
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