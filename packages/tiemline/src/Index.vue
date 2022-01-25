<template>
  <div class="container">
    <h3>timeline组件</h3>
    <img :src="logo" />
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>
  </div>
</template>
<script>
import logo from './assets/images/logo.png'
import { Button } from 'view-design'
export default {
  name: 'TimeLine',
  components: {
    Button
  },
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
