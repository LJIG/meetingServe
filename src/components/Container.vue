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
              <keep-alive>
                <component :is="current" />
                <ImgList v-if="!current" />
              </keep-alive>
            </el-aside>
          </el-main>
          <el-footer>
            <slot name="footer" />
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import ImgList from '@/components/ImgList.vue'
import AudioList from '@/components/AudioList.vue'
import VideoList from '@/components/VideoList.vue'
import { mapState } from 'vuex'
export default {
  components: { ImgList, AudioList, VideoList },
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
  computed: {
    ...mapState('listStatus', {
      current: state => state.current
    })
  },
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