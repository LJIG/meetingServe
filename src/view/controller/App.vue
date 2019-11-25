<template>
  <Container id="controller" :binWidth="width">
    <template slot="header">
      <Header />
    </template>
    <template slot="aside">
      <Aside />
    </template>
    <div slot="footer">
      左右左右BABA
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
      width: '10vw'
    }
  }
}
</script>

<style>
body{
  margin: 0;
}
</style>
