<template>
  <div id="showPage">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <h2>主屏幕</h2>
    {{files}}
    <button @click="setFiles([222])">test</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'showPage',
  components: {
  },
  computed: {
    ...mapState('file', {
      files: state => state.files
    })
  }
}
</script>

<style>
#showPage {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
