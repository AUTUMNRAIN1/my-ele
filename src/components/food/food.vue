<template>
<!-- <transition name="fade"> -->
  <div class="header" v-show="showFlag">
      <router-link to="/" class="back">
          <i class="fa fa-chevron-left" aria-hidden="true"></i>        
      </router-link>
      <div class="content-wrapper">       
      	<div class="avatar">
      		<img :src="seller.avatar" width="64" height="64">         
      	</div>
      	<div class="content">
      		<div class="title">
      			<span class="brand"></span>
      			<span class="name">{{seller.name}}</span>
      		</div>
      		<div class="description">
      			{{seller.description}}/{{seller.deliveryTime}}分钟到达
      		</div>
      		<div v-if="seller.supports" class="support">
      			<!-- <span class="icon" :class="classMap[seller.supports[0].type]"></span> -->
      			<span class="text">{{seller.supports[0].description}}</span>
      		</div>
      	</div>
          <div v-if="seller.supports" class="support-count" @click="showDetail">
              <span class="count">{{seller.supports.length}}个<i class="fa fa-angle-right" aria-hidden="true"></i></span>
              
          </div>
      </div>
      <div class="bulletin-wrapper" @click="showDetail">
          <span class="bulletin-title"></span>
          <span class="bulletin-text">{{seller.bulletin}}</span>
          <i class="icon iconfont icon-keyboard_arrow_right"></i>
      </div>		
      <div class="background">
          <img :src="seller.avatar" width="100%" height="100%">
      </div>
      <div v-show="detailShow" class="detail">
          <div class="detail-wrapper clearfix">
              <div class="detail-main">
                  <h1 class="name">{{seller.name}}</h1>
                  <div class="star_wrapper">
                    <div class="start1 star"></div>
                    <div class="start2 star"></div>
                    <div class="start3 star"></div>
                    <div class="start4 star"></div>
                    <div class="start5 star"></div>
                  </div>
                  <div class="title">
                      <div class="line"></div>
                      <div class="text">优惠信息</div>
                      <div class="line"></div>
                  </div>
                  <!-- <ul v-if="seller.supports" class="supports">
                      <li v-for="item in seller.supports" class="supports-item">
                          <span class="icon" :class="classMap[seller.supports[$index].type]"></span>
                          <span class="text" :class="classMap[seller.supports[$index].descriptionv ]"></span>
                      </li>
                  </ul> -->
              </div>
          </div>
          <div class="detail-close" @click="close_all">
              <i class="fa fa-times-circle" aria-hidden="true"></i>
          </div>
      </div>     
  </div>
<!-- <transition> -->
</template>

<script type="text/ecmascript-6">
 import star from '../star/star';
	export default {  		
        data(){
            return{
                 detailShow:false,
                 showFlag:true
            }          
        },
        props: {
          seller: {
                type:Object
              }
        },
        methods:{
            showDetail(){
                this.detailShow = true;
            },
            close_all(){
                this.detailShow = false;
            },
            backTo(){
                this.showFlag = false;
            }
        },
        components:{
        	//star
        },
        created(){
          this.classMap= ['decrease','discount','special','invoice','guarantee'] ;
        }
        // created(){
        //     this.classMap= ['decrease','','discount','special','invoice','guarantee'] ;

        //     let that = this;
        //        this.$http.get('../static/data/data.json').then(response => {
        //         console.log(response);
        //         console.log("这是我们需要的json数据",response.data);
        //        // 注意获取的是数组还是对象，我这里获取的是对象
        //         that.seller = response.data.seller;
        //         console.log("SEller这是我们需要的json数据",that.seller);
        //       }, response => {
        //       // error callback
        //       console.log("请求失败");
        //       alert('请求失败');
        //       });
        // }
        
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  @import "../../assets/css/food.css"
</style>
