<template>
  <div id="">
      <v-header v-bind:seller="seller"></v-header>
      <div class="tab">
        <div class="tab-item">
        <!-- 注意：路径要对应index.js的父组件，不要写成/food/merchan -->
          <router-link to="/food/showFood/merchan">商品</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/food/showFood/discuss">评论</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/food/showFood/seller">商家</router-link>
        </div>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
import VHeader from "./food.vue" 
import {api} from "../../global/api.js"
export default {
  data (){
    return {
      seller:{},
      goods:[]
    }
  },
  components:{
    "v-header":VHeader
  },
  created(){
      let that = this;
        this.$http.get(api.merchan).then(response => {
          // console.log(response);
          console.log("这是我们需要的json数据",response.data);
          // 注意获取的是数组还是对象，我这里获取的是对象
          that.seller = response.data.seller;
          that.goods = response.data.goods;
          console.log("这是我们需要的seller数据",that.seller);
          console.log("这是我们需要的goods数据",that.goods);
        }, response => {
        // error callback
        console.log("请求失败");
        alert('请求失败');
        });
  }
  
}
</script>

<style>
    .tab{
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
    }
    .tab .tab-item{
      /*平等分块*/
      height: 100%;
      /*background: red;*/
      flex:1;
      text-align: center;
    }
    .tab .tab-item a{
      font-size: 14px;
      color: rgb(77,85,93);
    }
    .tab .tab-item a.active{
      color: rgb(240,20,20);
    }
</style>
