<template>
  <div class="container">
    <h3>timeline组件</h3>
    <img :src="logo" />
  </div>
</template>
<script>
import logo from './assets/images/logo.png'
export default {
  name: 'TimeLine',
  data () {
    return {
      logo
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  background-color: rgba(gray, 0.3);
  background-image: url('./assets/images/bg_home_02.jpeg');
}
</style>
