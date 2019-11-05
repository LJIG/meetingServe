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
          <el-button round>静音</el-button>
          <el-button round>暂停</el-button>
          <el-button round>单曲循环</el-button>
          <el-button round>单曲归位</el-button>
          <el-button round>单个视频循环</el-button>
          <el-button round>视频列表循环</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
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