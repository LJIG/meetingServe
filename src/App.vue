<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <br />
    <br />
    <a href="showPage" target="_blank">主屏内容</a>
    <br />
    <br />
    <a href="controller" target="_blank">资源控制</a>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
