<template>
  <div class="merchan">
      <!-- 我是商品页面 -->
      <!-- 左侧菜单导航栏 -->
      <div class="menu-wrap" ref="menuWrapper">
      	<ul class="menu-ul">
      	<!-- :class="'current'=currentIndex===index" -->       
      		<li v-for="(item,index) in goods" class="menu-li" :class="{'current':currentIndex === index}" @click="selectMenu(index,$event)">
      			<span class="text">{{item.name}}</span>
      		</li>
      	</ul>
      </div>
      <!-- 右侧内容栏 -->
      <div class="foodShow" ref="foodWrapper">
      	<ul>
      		<li v-for="item in goods" class="food-list food-list-hook">
      			<h1 class="title">{{item.name}}</h1>
      			<ul>
      				<li v-for="food in item.foods" class="food-item">
      					<div class="icon">
      						<img :src="food.icon" width="57">
      					</div>
      					<div class="content">
      						<h2 class="name">{{food.name}}</h2>
      						<p class="des">{{food.description}}</p>
      						<div class="extra">
      							<span class="count">月售{{food.sellCount}}</span>
      							<span class="count">好评{{food.rating}}</span>
      						</div>
      						<div class="price">
      							<span class="now">￥{{food.price}}</span>
      							<span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
      						</div>
                  <div class="cartControl-wrapper">
                      <!-- 商品的增减以及数量的变化 -->
                      <cartcontrol :food="food" @increment="incrementTotal"></cartcontrol>
                  </div>
      					</div>
      				</li>
      			</ul>
      		</li>
      	</ul>
      </div>
      <!-- 注意：:select-foods="selectFoods" 前后驼峰形式：首单词是后面传入单词的横杆形式 -->
      <shopCart :select-foods="selectFoods" :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"></shopCart>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import shopCart from "./shopCart";
import cartcontrol from "../cartControl/cartControl.vue"
import {api} from "../../global/api.js"
export default {	
    data (){
      return {
      	seller:{},
      	goods:[],
      	scrolly:0,
      	listHeight:[]
      }
    },
    computed:{
    	currentIndex(){
    		for(var i = 0;i<this.listHeight.length;i++){
          //拿到相邻li的高度
    			let height1 = this.listHeight[i];
    			let height2 = this.listHeight[i+1];
          // console.log("height1---",height1);
          // console.log("height2---",height2);
          // console.log("this.scrolly----",this.scrolly);
          // console.log("this.listHeight----------",this.listHeight.length)
          		//判断滚动的距离是在该商品分类之内
    			if(!height2||(this.scrolly>=height1&&this.scrolly<height2)){
    				return i;
    			}
    		}
    		return 0;
    	},
      selectFoods(){
        let foods = [];
        //遍历goods每个商品的数量
        this.goods.forEach((good)=>{
          good.foods.forEach((food)=>{
            if(food.count){
              foods.push(food);
            }
          });
        });
        return foods;
      }
    },
    methods:{
    	_initScroll(){
    		this.menuScroll = new BScroll(this.$refs.menuWrapper,{
          click:true
        });
    		this.foodScroll = new BScroll(this.$refs.foodWrapper,{
    			probeType:3,
          click:true
    		});
        //获取滚动的Y轴距离
    		this.foodScroll.on('scroll',(pos)=>{
    			this.scrolly = Math.abs(Math.round(pos.y));
    		})			
    	},
    	_calculateHeight(){
        let foodList = document.getElementsByClassName('food-list-hook');
    		// let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook');
        console.log("foodList----------",foodList.length );
    		let iHeight = 0;
    		this.listHeight.push(iHeight);
        console.log("foodList.length----------",foodList.length);
        //把每个li距离顶部的高度放进listHeight数组里
    		for(let i = 0;i<foodList.length;i++){
    			let item = foodList[i];
    			iHeight+=item.clientHeight;
    			this.listHeight.push(iHeight);
    		}
    		console.log("this.listHeight----------",this.listHeight);
    	},
      selectMenu(index,event){
        console.log(22);
        if(!event._constructed){
          // 去掉自带click事件的点击
          return;
        }
        // let foodList = this.$els.foodWrapper.getElementsByClassName('food-list-hook');
        let foodList = document.getElementsByClassName('food-list-hook');
        let el = foodList[index];
        this.foodScroll.scrollToElement(el,300);  
      },
      incrementTotal(target) {
        this.$refs.shopCart.drop(target);
      }
    },
    mounted(){
        let that = this;
           // this.$http.get('../static/data/data.json').then(response => {
            this.$http.get(api.merchan).then(response => {
              console.log("aa");
            console.log("这是我们需要的json数据",response.data);
           // 注意获取的是数组还是对象，我这里获取的是对象
            that.seller = response.data.seller;
            that.goods = response.data.goods;
           }, response => {
            console.log("请求失败");
           });
           //随时更新的函数入口
           // this.$nextTick(()=>{
           //    that._initScroll();
           //    that._calculateHeight();
           // })
          setTimeout(function(){
            that._initScroll();
            that._calculateHeight();
          },10)
    },
    components:{
      shopCart,
      cartcontrol
    }

}
</script>

<style scoped>
	.merchan{
		display: flex;
		position: absolute;
		bottom: 46px;
		top: 174px;
		width: 100%;
		overflow: hidden;
	}
	.menu-wrap{
		/*flex:1;*/
		flex:0 0 auto;
		width: 80px;
		background:#eee;	
	}
	.foodShow{
		flex:1;
		/*overflow: scroll;*/
	}
	.menu-wrap .menu-ul{
	}
	.menu-wrap .menu-li{
		display: table;
	    width: 80%;
	    padding: 10% 10%;
	    text-align: center;
	    height: 12%;
	    border-bottom: 1px solid #e9e9e9;
	}
	.menu-wrap .menu-li.current{
		background: lightgreen;
	}
	.menu-wrap .menu-li .text{
		display: inline-block;
		vertical-align: middle;
		padding: 0 0.8rem;		
	}
	.foodShow .food-list .title{
		padding-left: 14px;
		height: 10%;
		line-height: 200%;
		border-left: 2px solid #d9dde1;
		font-size: 0.2rem;
		color: #93999f;
		background: #f3f5f7;
	}
	.foodShow .food-list .food-item {
		display: flex;
		margin: 18px;
		padding-bottom: 18px;
		position: relative;
	}
	.foodShow .food-list .food-item .icon {
		flex:0 0 57px;
		margin-right: 10px;
	}
	.foodShow .food-list .food-item .content {
		flex:1;
	}
	.foodShow .food-list .food-item .content .name{
		margin: 2px 0 8px 0;
		font-size: 0.4rem;
		color: #07111b;
	}
	.foodShow .food-list .food-item .content .des{
		margin-bottom: 3%;
    	line-height: 12px;
	}
	.foodShow .food-list .food-item .extra {
		line-height: 10px;
		color: #93999f;
	}
	.foodShow .food-list .food-item .content .price{
		line-height: 24px;
	}
	.foodShow .food-list .food-item .content .price .now{
		margin-right: 8px;
		font-size: 14px;
		color: #f01414;
	}
	.foodShow .food-list .food-item .content .price .old{
    	color: #93999f;
    	text-decoration: line-through;
	}
  .foodShow .food-list .food-item .cartControl-wrapper {
    display: inline-block;
    position: absolute;
    right: 0;
    bottom: 1.4rem;

  }
</style>
