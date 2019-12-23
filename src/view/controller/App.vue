<template>
  <Container id="controller" :binWidth="width">
    <template slot="header">
      <Header />
    </template>
    <template slot="aside">
      <Aside />
    </template>
    <div slot="footer">
    如果有修改(删除、移动、新增)本地文件夹中的文件，请及时修改保持本系统与本地文件一致！！！
    </div>
  </Container>
</template>

<script>
import Container from '@/components/Container.vue'
import Header from '@/components/Header.vue'
import Aside from '@/components/Aside.vue'
export default {
  name: 'controller',
  components: {
    Container,
    Header,
    Aside
  },
  data () {
    return {
      width: '7.8vw'
    }
  },
  created () {
    window.addEventListener('unload', function () {
      const store = window.localStorage
      Object.keys(store).forEach(item => {
        window.localStorage.removeItem(item)
      })
    })
  }
}
</script>

<style>
body {
  margin: 0;
}
</style>
