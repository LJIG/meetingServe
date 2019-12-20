<template>
  <div class="wrapper">
    <el-button
      v-for="(item,index) in fileList"
      :key="index"
      round
      @click="changeList(item.file)"
    >{{item.name}}</el-button>
    <el-button round @click="changeList('task')">任务日程/计划</el-button>
  </div>
</template>

<script>
import { list_docmentName } from '@/components'
import { mapState, mapActions } from 'vuex'
export default {
  components: {},
  props: {},
  data () {
    return {
      fileList: list_docmentName
    }
  },
  watch: {},
  computed: {
    ...mapState('listStatus', {
      currentState: state => state.current
    })
  },
  methods: {
    ...mapActions('listStatus', {
      setStatus: 'changeStatus'
    }),
    changeList (type) {
      this.setStatus(type)
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