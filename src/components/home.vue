<template>
  <div class="home">
    <div class="top">
      <router-link to="" class="search"><i class="el-icon-search"></i></router-link>
      <router-link to="" class="place">黄埔区地铁萝岗站公交站东北(开创大道北)</router-link>
      <router-link to="" class="login">登录/注册</router-link>
    </div>
    <div class="carousel">
      <mt-swipe :show-indicators="false">
        <mt-swipe-item>
            <router-link to="" v-for="item in carol">
              <li>
                <img :src="item.Url" >
                <p>{{item.text}}</p>
              </li>
            </router-link>
        </mt-swipe-item>
        <mt-swipe-item>
            <router-link to="" v-for="item in carolb">
              <li>
                <img :src="item.Url" >
                <p>{{item.text}}</p>
              </li>
            </router-link>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="carret">
      <div class="near">
        <i class="el-icon-menu"></i>
        <p>附近商家</p>
      </div>
      <router-link to="/food/showFood" v-for="item in shopNear">
        <li>
          <div class="img">
            <img :src="item.Url">
          </div>
          <div class="right">
            <div class="shang">
              <div class="brand">品牌</div>
              <div class="name">{{item.text}}</div>
              <div class="gurantee">保准票</div>
            </div>
            <div class="middle">
              <div class="star_all">
                <div class="start1 star"></div>
                <div class="start2 star"></div>
                <div class="start3 star"></div>
                <div class="start4 star"></div>
                <div class="start5 star"></div>
              </div> 
              <p class="pinlun">4.6</p> 
              <p class="sale">月售323单</p> 
              <div class="pei">
                <span class="pei1">蜂鸟专送</span>  
                <span class="pei2">准时达</span>  
              </div>                   
            </div>
            <div class="xia">
              <span class="xiaA">¥20起送 / 配送费约¥5</span>
              <span class="xiaB">974.2公里 / </span>
              <span class="xiaC">13小时26分钟</span>
            </div>
          </div>
        </li>
      </router-link>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {
      carol:[
        {Url:'https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg',text:"甜品饮品"},
        {Url:'https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg',text:"美食"},
        {Url:'https://fuss10.elemecdn.com/3/84/8e031bf7b3c036b4ec19edff16e46jpeg.jpeg',text:"准时达"},
        {Url:'https://fuss10.elemecdn.com/a/fa/d41b04d520d445dc5de42dae9a384jpeg.jpeg',text:"新店特惠"},
        {Url:'https://fuss10.elemecdn.com/8/83/171fd98b85dee3b3f4243b7459b48jpeg.jpeg',text:"鲜花蛋糕"},
        {Url:'https://fuss10.elemecdn.com/2/17/244241b514affc0f12f4168cf6628jpeg.jpeg',text:"包子粥店"},
        {Url:'https://fuss10.elemecdn.com/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg',text:"商超便利"},
        {Url:'https://fuss10.elemecdn.com/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg',text:"预订早餐"}
      ],
      carolb:[
        {Url:'https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg',text:"甜品饮品"},
        {Url:'https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg',text:"美食"},
        {Url:'https://fuss10.elemecdn.com/3/84/8e031bf7b3c036b4ec19edff16e46jpeg.jpeg',text:"准时达"},
        {Url:'https://fuss10.elemecdn.com/a/fa/d41b04d520d445dc5de42dae9a384jpeg.jpeg',text:"新店特惠"},
        {Url:'https://fuss10.elemecdn.com/8/83/171fd98b85dee3b3f4243b7459b48jpeg.jpeg',text:"鲜花蛋糕"},
        {Url:'https://fuss10.elemecdn.com/2/17/244241b514affc0f12f4168cf6628jpeg.jpeg',text:"包子粥店"},
        {Url:'https://fuss10.elemecdn.com/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg',text:"商超便利"},
        {Url:'https://fuss10.elemecdn.com/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg',text:"预订早餐"}
      ],
      shopNear:[
        {Url:'https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg',text:"效果演示1"},
        {Url:'https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg',text:"效果演示2"},
        {Url:'https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg',text:"效果演示3"},
        {Url:'https://fuss10.elemecdn.com/a/fa/d41b04d520d445dc5de42dae9a384jpeg.jpeg',text:"效果演示4"},
        {Url:'https://fuss10.elemecdn.com/8/83/171fd98b85dee3b3f4243b7459b48jpeg.jpeg',text:"效果演示5"},
        {Url:'https://fuss10.elemecdn.com/2/17/244241b514affc0f12f4168cf6628jpeg.jpeg',text:"效果演示6"},
        {Url:'https://fuss10.elemecdn.com/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg',text:"效果演示7"},
        {Url:'https://fuss10.elemecdn.com/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg',text:"效果演示8"}
      ]
    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/css/home.css"
</style>
