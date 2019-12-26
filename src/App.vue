<template>
  <div id="app">
    <div class="leftBG">
      <a href="showPage" target="_blank">主屏内容</a>
    </div>
    <div class="rightBG">
      <a href="controller" target="_blank">资源控制</a>
    </div>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
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
* {
  margin: 0;
  padding: 0;
}
:root{
  --leftColor: #503e3e;
  --rightColor: #6cc197;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  width: 100vw;
  height: 100vh;
  position: absolute;
}
#app div {
  width: 50%;
  height: 100%;
  float: left;
}
#app img {
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}
#app .leftBG {
  background: #000;
  background: var(--leftColor);
  position: relative;
  z-index: 1;
  color: white;
}
#app .leftBG::after {
  content: "";
  background: #ccc;
  position: absolute;
  top: 0;
  right: 0;
  /* border-right: 50vh solid #00ff7f; */
  border-right: 50vh solid var(--rightColor);
  /* border-top: 50vh solid #ff4c01; */
  border-top: 50vh solid var(--leftColor);
  z-index: 5;
}
#app .rightBG {
  /* background: #00ff7f; */
  background: var(--rightColor);
  position: relative;
  z-index: 1;
}
#app .rightBG::after {
  content: "";
  background: #ccc;
  position: absolute;
  bottom: 0;
  left: 0;
  /* border-right: 50vh solid #00ff7f; */
  border-right: 50vh solid var(--rightColor);
  border-top: 50vh solid var(--leftColor);
  z-index: 5;
}
#app a {
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, -50%);
  text-decoration: unset;
  font-size: 3rem;
  display: block;
  width: 8rem;
  font-weight: bold;
  letter-spacing: 1rem;
  padding-left: 1rem;
}
#app .leftBG a {
  transform: translate(-100%, -50%);
}
#app .rightBG a {
  transform: translate(0, -50%);
}
</style>
