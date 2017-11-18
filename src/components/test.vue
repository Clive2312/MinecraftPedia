<template>
<div class="block">
  <span class="demonstration"></span>
  <el-carousel height="800px">
    <el-carousel-item v-for="(item, index) in banners" :key="index">
      <img :src="item.imgUrl">
    </el-carousel-item>
  </el-carousel>
</div>
</template>

<script>
import banner1 from '../assets/banner01.jpg'
import banner2 from '../assets/banner02.jpg'
import banner3 from '../assets/banner02.jpg'
import banner4 from '../assets/banner02.jpg'
export default {
  name: 'test',
  data () {
    return {
      banners:[
        { imgUrl: banner1 },
        { imgUrl: banner2 },
        { imgUrl: banner3 },
        { imgUrl: banner4 },
      ],
    }
  }
}
</script>

<style>
.el-carousel__item img {
  width: auto;
  height: 1080px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #FFFFFF;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #FFFFFF;
}
</style>
