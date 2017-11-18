<template>
<el-container>
  <div class="header">
    <img :src="logo">
    <a>Wiki</a>
    <i class="el-icon-search"></i>
    <el-row class="demo-autocomplete">
      <el-col :span="25">
        <el-autocomplete class="inline-input" v-model="state2" :fetch-suggestions="querySearch" placeholder="请输入内容" :trigger-on-focus="false" @select="handleSelect"></el-autocomplete>
      </el-col>
    </el-row>
  </div>
  <el-carousel :interval="4000" type="card" height="420px">
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
              <el-button type="text" class="button">Click for more</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </el-main>
  <el-footer>
    <div class="copyright">
      Mojang © 2009-2017. "Minecraft" is a trademark of Mojang Synergies AB  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp           By Clive
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
          message: "I see the player you mean..."
        },
        {
          imgUrl: pic02,
          span: 12,
          tag: "Hours of Towers",
          message: "Four New Captivating Creations Come to Java Realms!"
        },
        {
          imgUrl: pic01,
          span: 6,
          tag: "MineCon Skins",
          message: "Official skins for MineCon!"
        },
        {
          imgUrl: pic03,
          span: 12,
          tag: "Free MineCon Stuff On Marketplace!",
          message: "Pick up MINECON skins, party parrots and a planet for nothing!"
        },
        {
          imgUrl: pic04,
          span: 6,
          tag: "MineCon Earth",
          message: "Everything you need to know!"
        },
        {
          imgUrl: pig,
          span: 6,
          tag: "Pig",
          message: "Steve's friend in Minecraft."
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
      restaurants: [],
      state1: '',
      state2: ''
    };
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    loadAll() {
      return [{
          "value": "三全鲜食（北新泾店）",
          "address": "长宁区新渔路144号"
        },
        {
          "value": "Hot honey 首尔炸鸡（仙霞路）",
          "address": "上海市长宁区淞虹路661号"
        },
        {
          "value": "新旺角茶餐厅",
          "address": "上海市普陀区真北路988号创邑金沙谷6号楼113"
        },
        {
          "value": "泷千家(天山西路店)",
          "address": "天山西路438号"
        },
        {
          "value": "胖仙女纸杯蛋糕（上海凌空店）",
          "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
        },
        {
          "value": "贡茶",
          "address": "上海市长宁区金钟路633号"
        },
        {
          "value": "豪大大香鸡排超级奶爸",
          "address": "上海市嘉定区曹安公路曹安路1685号"
        },
        {
          "value": "茶芝兰（奶茶，手抓饼）",
          "address": "上海市普陀区同普路1435号"
        },
        {
          "value": "十二泷町",
          "address": "上海市北翟路1444弄81号B幢-107"
        },
        {
          "value": "星移浓缩咖啡",
          "address": "上海市嘉定区新郁路817号"
        },
        {
          "value": "阿姨奶茶/豪大大",
          "address": "嘉定区曹安路1611号"
        },
        {
          "value": "新麦甜四季甜品炸鸡",
          "address": "嘉定区曹安公路2383弄55号"
        },
        {
          "value": "Monica摩托主题咖啡店",
          "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"
        },
        {
          "value": "浮生若茶（凌空soho店）",
          "address": "上海长宁区金钟路968号9号楼地下一层"
        },
        {
          "value": "NONO JUICE  鲜榨果汁",
          "address": "上海市长宁区天山西路119号"
        },
        {
          "value": "CoCo都可(北新泾店）",
          "address": "上海市长宁区仙霞西路"
        },
        {
          "value": "快乐柠檬（神州智慧店）",
          "address": "上海市长宁区天山西路567号1层R117号店铺"
        },
        {
          "value": "Merci Paul cafe",
          "address": "上海市普陀区光复西路丹巴路28弄6号楼819"
        },
        {
          "value": "猫山王（西郊百联店）",
          "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306"
        },
        {
          "value": "枪会山",
          "address": "上海市普陀区棕榈路"
        },
        {
          "value": "纵食",
          "address": "元丰天山花园(东门) 双流路267号"
        },
        {
          "value": "钱记",
          "address": "上海市长宁区天山西路"
        },
        {
          "value": "壹杯加",
          "address": "上海市长宁区通协路"
        },
        {
          "value": "唦哇嘀咖",
          "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"
        },
        {
          "value": "爱茜茜里(西郊百联)",
          "address": "长宁区仙霞西路88号1305室"
        },
        {
          "value": "爱茜茜里(近铁广场)",
          "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"
        },
        {
          "value": "鲜果榨汁（金沙江路和美广店）",
          "address": "普陀区金沙江路2239号金沙和美广场B1-10-6"
        },
        {
          "value": "开心丽果（缤谷店）",
          "address": "上海市长宁区威宁路天山路341号"
        },
        {
          "value": "超级鸡车（丰庄路店）",
          "address": "上海市嘉定区丰庄路240号"
        },
        {
          "value": "妙生活果园（北新泾店）",
          "address": "长宁区新渔路144号"
        },
        {
          "value": "香宜度麻辣香锅",
          "address": "长宁区淞虹路148号"
        },
        {
          "value": "凡仔汉堡（老真北路店）",
          "address": "上海市普陀区老真北路160号"
        },
        {
          "value": "港式小铺",
          "address": "上海市长宁区金钟路968号15楼15-105室"
        },
        {
          "value": "蜀香源麻辣香锅（剑河路店）",
          "address": "剑河路443-1"
        },
        {
          "value": "北京饺子馆",
          "address": "长宁区北新泾街道天山西路490-1号"
        },
        {
          "value": "饭典*新简餐（凌空SOHO店）",
          "address": "上海市长宁区金钟路968号9号楼地下一层9-83室"
        },
        {
          "value": "焦耳·川式快餐（金钟路店）",
          "address": "上海市金钟路633号地下一层甲部"
        },
        {
          "value": "动力鸡车",
          "address": "长宁区仙霞西路299弄3号101B"
        },
        {
          "value": "浏阳蒸菜",
          "address": "天山西路430号"
        },
        {
          "value": "四海游龙（天山西路店）",
          "address": "上海市长宁区天山西路"
        },
        {
          "value": "樱花食堂（凌空店）",
          "address": "上海市长宁区金钟路968号15楼15-105室"
        },
        {
          "value": "壹分米客家传统调制米粉(天山店)",
          "address": "天山西路428号"
        },
        {
          "value": "福荣祥烧腊（平溪路店）",
          "address": "上海市长宁区协和路福泉路255弄57-73号"
        },
        {
          "value": "速记黄焖鸡米饭",
          "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位"
        },
        {
          "value": "红辣椒麻辣烫",
          "address": "上海市长宁区天山西路492号"
        },
        {
          "value": "(小杨生煎)西郊百联餐厅",
          "address": "长宁区仙霞西路88号百联2楼"
        },
        {
          "value": "阳阳麻辣烫",
          "address": "天山西路389号"
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
    this.restaurants = this.loadAll();
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

.el-icon-search{
  color: #FFFFFF;
  margin-left: 1380px;
  margin-top: 42px;
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
  height: 880px;
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
