<template>
<el-container>

  <div class="myheader">
    <el-row :gutter="20">
      <el-col :span="6">
        <img :src="logo">
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <a>Wiki</a>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
        </div>
      </el-col>
      <el-col :span="4">
        <el-row class="demo-autocomplete">
          <el-col :span="25">
            <el-autocomplete class="inline-input" v-model="state2" :fetch-suggestions="querySearch" placeholder="Infinite World! xD" :trigger-on-focus="false" @select="handleSelect"></el-autocomplete>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple">
          <div class="searchButton">
            <el-button type="primary" icon="el-icon-search" @click="open">Search</el-button>
          </div>
        </div>
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
              <a :href="item.link">
                <el-button type="text" class="button">Click for more</el-button>
              </a>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </el-main>
  <el-footer>
    <div class="copyright">
      Mojang © 2009-2017. "Minecraft" is a trademark of Mojang Synergies AB&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp By Clive
    </div>
  </el-footer>
</el-container>
</template>

<script>
import logo from '../assets/logo.svg'
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
  data () {
    return {
      currentDate: new Date(),
      logo,
      steve,
      pig,
      boxes1: [{
        imgUrl: steve,
        span: 6,
        tag: 'Steve',
        message: 'I see the player you mean...',
        link: 'https://minecraft.gamepedia.com/The_Player'
      },
      {
        imgUrl: pic02,
        span: 12,
        tag: 'Hours of Towers',
        message: 'Four New Captivating Creations Come to Java Realms!',
        link: 'https://minecraft.net/zh-hans/article/new-java-realms-hours-towers'
      },
      {
        imgUrl: pic01,
        span: 6,
        tag: 'MineCon Skins',
        message: 'Official skins for MineCon!',
        link: 'https://minecraft.net/zh-hans/article/slip-some-minecon-skins'
      },
      {
        imgUrl: pic03,
        span: 12,
        tag: 'Free MineCon Stuff On Marketplace!',
        message: 'Pick up MINECON skins, party parrots and a planet for nothing!',
        link: 'https://minecraft.net/zh-hans/article/free-minecon-stuff-marketplace'
      },
      {
        imgUrl: pic04,
        span: 6,
        tag: 'MineCon Earth',
        message: 'Everything you need to know!',
        link: 'https://minecraft.net/zh-hans/article/one-week-until-minecon-earth'
      },
      {
        imgUrl: pig,
        span: 6,
        tag: 'Pig',
        message: 'Your friend in Minecraft.',
        link: 'https://minecraft.gamepedia.com/Pig'
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
      }
      ],
      Mines: [],
      state1: '',
      state2: ''
    }
  },
  methods: {
    open () {
      this.$message('Still to be done...')
    },
    querySearch (queryString, cb) {
      var Mines = this.Mines
      var results = queryString ? Mines.filter(this.createFilter(queryString)) : Mines
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter (queryString) {
      return (Mines) => {
        return (Mines.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    loadAll () {
      return [{
        'value': 'Minecraft',
        'address': 'Minecraft Official Website'
      },
      {
        'value': '我的世界',
        'address': '我的世界国服'
      }
      ]
    },
    handleSelect (item) {
      console.log(item)
    }
  },
  mounted () {
    this.Mines = this.loadAll()
  },
  jump (item) {
    window.location.href = item.link
  }
}
</script>

<style scoped>
.myheader {
  background-color: #000000;
  background: url('../assets/header.png')top fixed;

  width: 100%;
  height: 100px;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.myheader a{
  margin-left: 10px;
  margin-top: 10px;
  font-size: 45px;
  font-family: Helvetica;
  color: rgba(0,0,0,0);
}

.myheader img {
  margin-top: 20px;
  margin-left: 10px;
}


.demo-autocomplete {
  margin-left: 65px;
  margin-top: 18px;
  size: medium;
}

.searchButton {
  margin-top: 18px;
  margin-left: 0px;
}


.el-carousel {

  background: url('../assets/backgroun.png');
}

.el-carousel img {
  margin-top: 20px;
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

.copyright {
  color: #FFF
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background-color: rgba(0, 0, 0, 0);
}

.grid-content {
  border-radius: 4px;
  min-height: 100px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
