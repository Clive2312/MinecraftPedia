<template>
<el-container>
  <el-header>
    <div class="el-header">
      <img :src="logo">
      <a>Wiki</a>
    </div>
  </el-header>
</el-container>
</template>

<script>
import logo from '../assets/Minecraft_Logo.png'
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
.el-header {
  background-color: #000000;
  background: url('../assets/header.png')top fixed;
  width: 100%;
  height: 360px;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-header a {
  position: absolute;
  left: 320px;
  top: 8px;
  font-size: 30px;
  font-family: Helvetica;
  color: #FFFFFF;
}

.el-header img {
  position: absolute;
  left: 20px;
  top: 5px;
}
</style>
