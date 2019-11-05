<template>
  <div class="wrapper">
    <el-container>
      <el-header>
        <slot name="header" />
      </el-header>
      <el-container>
        <el-aside :width="binWidth">
          <slot name="aside" />
        </el-aside>
        <el-container>
          <el-main>
            <el-aside :width="listWidth">
              <slot name="list" />
            </el-aside>
          </el-main>
          <el-footer>
            <slot name="footer"/>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    binWidth: {
      type: String,
      default: '200px',
      required: true
    },
    listWidth: {
      type: String,
      default: '45%',
      // required: true
    }
  },
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
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 8vh;
}
.el-container {
  height: 91.5vh;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  height: 100%;
  line-height: 15vh;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  /* margin-bottom: 40px; */
}
</style>