<template>
<el-container>
  <div class="header">
    <img :src="logo">
    <a>Wiki</a>
    <el-row class="demo-autocomplete">
      <el-col :span="25">
        <el-autocomplete class="inline-input" v-model="state2" :fetch-suggestions="querySearch" placeholder="Search" :trigger-on-focus="false" @select="handleSelect"></el-autocomplete>
      </el-col>
    </el-row>
  </div>
  <el-carousel :interval="4000" type="card" height="440px">
    <el-carousel-item v-for="(item, index) in banners" :key="index">
      <img :src="item.imgUrl">
    </el-carousel-item>
  </el-carousel>
  <el-main>
    <el-row>
      <el-col v-for="(item, index) in boxes1" :key="index" :span="item.span">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="item.imgUrl" class="image">
          <div style="padding: 14px;">
            <span>{{item.tag}}</span>
            <div class="bottom clearfix">
              {{item.message}}
              <a :href="item.link"><el-button type="text" class="button">Click for more</el-button></a>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </el-main>
  <el-footer>
    <div class="copyright">
      Mojang © 2009-2017. "Minecraft" is a trademark of Mojang Synergies AB&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp           By Clive
    </div>
  </el-footer>
</el-container>
</template>

<script>
import logo from '../assets/Logo_MC.png'
import pic1 from '../assets/1.jpg'
import pic2 from '../assets/2.jpg'
import pic3 from '../assets/3.png'
import pic4 from '../assets/4.jpg'
import pic5 from '../assets/5.jpg'
import pic6 from '../assets/6.jpg'
import pic01 from '../assets/01.jpg'
import pic02 from '../assets/02.jpg'
import pic03 from '../assets/04.jpg'
import pic04 from '../assets/03.jpg'
import steve from '../assets/steve1.png'
import pig from '../assets/pig.png'
export default {
  name: 'container',
  data() {
    return {
      currentDate: new Date(),
      logo,
      steve,
      pig,
      boxes1: [{
          imgUrl: steve,
          span: 6,
          tag: "Steve",
          message: "I see the player you mean...",
          link: "https://minecraft.gamepedia.com/The_Player"
        },
        {
          imgUrl: pic02,
          span: 12,
          tag: "Hours of Towers",
          message: "Four New Captivating Creations Come to Java Realms!",
          link: "https://minecraft.net/zh-hans/article/new-java-realms-hours-towers"
        },
        {
          imgUrl: pic01,
          span: 6,
          tag: "MineCon Skins",
          message: "Official skins for MineCon!",
          link: "https://minecraft.net/zh-hans/article/slip-some-minecon-skins"
        },
        {
          imgUrl: pic03,
          span: 12,
          tag: "Free MineCon Stuff On Marketplace!",
          message: "Pick up MINECON skins, party parrots and a planet for nothing!",
          link: "https://minecraft.net/zh-hans/article/free-minecon-stuff-marketplace"
        },
        {
          imgUrl: pic04,
          span: 6,
          tag: "MineCon Earth",
          message: "Everything you need to know!",
          link: "https://minecraft.net/zh-hans/article/one-week-until-minecon-earth"
        },
        {
          imgUrl: pig,
          span: 6,
          tag: "Pig",
          message: "Steve's friend in Minecraft.",
          link: "https://minecraft.gamepedia.com/Pig"
        }
      ],
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
      Mines: [],
      state1: '',
      state2: ''
    };
  },
  methods: {
    querySearch(queryString, cb) {
      var Mines = this.Mines;
      var results = queryString ? Mines.filter(this.createFilter(queryString)) : Mines;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (Mines) => {
        return (Mines.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    loadAll() {
      return [{
          "value": "三全鲜食（北新泾店）",
          "address": "长宁区新渔路144号"
        },
        {
          "value": "南拳妈妈龙虾盖浇饭",
          "address": "普陀区金沙江路1699号鑫乐惠美食广场A13"
        }
      ];
    },
    handleSelect(item) {
      console.log(item);
    }
  },
  mounted() {
    this.Mines = this.loadAll();
  },
  jump(item){
    window.location.href=item.link;
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
  top: 25px;
  font-size: 45px;
  font-family: Helvetica;
  color: #FFFFFF;
}

.header img {
  position: absolute;
  left: 20px;
  top: 15px;
}


.demo-autocomplete {
  position: absolute;
  left: 80%;
  top: 28px;
  size: medium;

}

.el-carousel {

  background: url('../assets/backgroun.png');
}

.el-carousel img {
  width: 100%;
  height: 100%;
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

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}


.button {
  padding: 0;
  float: right;
  color: #24B006;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.copyright{
  color:#FFF
}
</style>
