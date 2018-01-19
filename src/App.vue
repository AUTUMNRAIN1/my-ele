<template>
  <div id="app">
    <div class="bottom">
      <li class="tab-item"><router-link to="/home">
        <i class="fa fa-opera" aria-hidden="true"></i>
        <span>外卖</span>
      </router-link></li>
      <li class="tab-item">
        <router-link to="/search">
          <i class="fa fa-gg-circle" aria-hidden="true"></i>
          <span>搜索</span>
        </router-link>
      </li>
      <li class="tab-item">
        <router-link to="/order">
        <i class="fa fa-bar-chart" aria-hidden="true"></i>
        <span>订单</span>
        </router-link>
      </li>
      <li class="tab-item">
        <router-link to="/myself">
        <i class="fa fa-user-md" aria-hidden="true"></i>
        <span>我的</span>
        </router-link>
      </li>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data (){
    return {
      seller:{}
    }
  }
  // created(){
  //     let that = this;
  //       this.$http.get('../static/data/data.json').then(response => {
  //         // console.log(response);
  //         console.log("这是我们需要的json数据",response.data);
  //         // 注意获取的是数组还是对象，我这里获取的是对象
  //         that.seller = response.data;
  //         console.log("这是我们需要的json数据",that.seller);
  //       }, response => {
  //       // error callback
  //       console.log("请求失败");
  //       alert('请求失败');
  //       });
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
#app{
  /*fixed解决高度占全屏的问题*/
  position: fixed;
  width: 100%;
  height: 100%;
  /*background: pink;*/
}
#app .bottom{
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 8%;
  z-index: 999;
  background: #fff;
  border-top: 1px solid #e3e3e3;
}
#app .bottom li{
  flex:1;
  height: 100%;
  line-height: 320%;
  position: relative;
}
#app .bottom li span{
  display: block;
  bottom: -9px;
  position: absolute;
  right: 36%;
}
.bottom .tab-item a{
  font-size: 14px;
  color: rgb(77,85,93);
}
.bottom .tab-item a.active{
  color: rgb(240,20,20);
}
.bottom .tab-item a i{
  position: absolute;
  top: 16%;
  left: 42%;
}
</style>
