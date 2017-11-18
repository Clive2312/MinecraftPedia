<template>
  <div class="header">
    <img :src="logo">
    <a>Wiki</a>
  </div>
</template>

<script>
import logo from '../assets/Logo_MC.png'
export default {
  name: 'header',
  data () {
    return {
      logo
    }
  }
}
</script>

<style>
.header {
  background-color: #000000;
  background: url('../assets/header.png')top fixed;
  width: 100%;
  height: 100px;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.header a {
  position: absolute;
  left: 420px;
  top: 20px;
  font-size: 45px;
  font-family: Helvetica;
  color: #FFFFFF;
}

.header img {
  position: absolute;
  left: 20px;
  top: 10px;
}
</style>
