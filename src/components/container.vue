<template>
<el-container>
  <el-carousel :interval="4000" type="card" height="400px">
    <el-carousel-item v-for="(item, index) in banners" :key="index">
      <img :src="item.imgUrl">
    </el-carousel-item>
  </el-carousel>
  <el-main>
  </el-main>
  <el-footer></el-footer>
</el-container>
</template>

<script>
import pic1 from '../assets/1.jpg'
import pic2 from '../assets/2.jpg'
import pic3 from '../assets/3.png'
import pic4 from '../assets/4.jpg'
import pic5 from '../assets/5.jpg'
import pic6 from '../assets/6.jpg'
export default {
  name: 'container',
  data() {
    return {
      banners: [{
          imgUrl: pic1
        },
        {
          imgUrl: pic2
        },
        {
          imgUrl: pic3
        },
        {
          imgUrl: pic4
        },
        {
          imgUrl: pic5
        },
        {
          imgUrl: pic6
        },
      ],
    }
  }
}
</script>

<style>

.el-carousel {
  background: url('../assets/backgroun.png');
}

.el-carousel img {
  width: 100%;
  height: 90%;
}

.el-footer {
  background-color: #000000;
  width: 100%;
  height: 360px;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  width: 100%;
  height: 992px;
  background: url('../assets/backgroun.png');
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 0px;
}
</style>
