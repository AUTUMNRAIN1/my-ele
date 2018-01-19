<template>
  <div class="shopcart">
    <div class="content" @click="toggleList($event)">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo" :class="{'highlight':totalCount>0}">
            <i class="fa fa-shopping-cart" aria-hidden="true" :class="{'highlight':totalCount>0}"></i>
          </div>
          <div class="num" v-show="totalCount>0">{{totalCount}}</div>
        </div>
        <div class="price" :class="{'highlight': totalPrice > 0}">￥{{totalPrice}}</div>
        <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
      </div>
      <div class="content-right">
        <div class="pay" :class="payClass">{{payDec}}</div>
      </div>
    </div>
    <div class="shopcart-list" v-show="listShow">
      <div class="list-header">
        <h1 class="title">购物车</h1>
        <span class="empty" @click="empty">清空</span>
      </div>
      <div class="list-content" ref="listContent">
        <ul>
          <li class="shopcart-food" v-for="food in selectFoods">
            <span class="name">{{food.name}}</span>
            <div class="price">
              <span>￥{{food.price * food.count}}</span>
            </div>
            <div class="cartControl-wrapper">
              <cartControl :food="food"></cartControl>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import cartControl from "../cartControl/cartControl.vue"
import BScroll from 'better-scroll';
export default {	
    props:{
      selectFoods:{
        type:Array,
        //如果返回的是数组的话需要加上默认函数/值
        default(){
          //返回默认值
          return [{price:11,count:1}];
        }
      },
      deliveryPrice:{
        type:Number,
        default:2
      },
      minPrice:{
        type:Number,
        default:10
      }
    },
    data (){
      return {
        fold: true
      }
    },
    computed:{
      totalCount(){
        let count = 0;
        this.selectFoods.forEach((food)=>{
          count+=food.count;
        });
        return count;
      },
      totalPrice(){
        let total = 0;
        this.selectFoods.forEach((food)=>{
          total+=food.price*food.count;
        })
        return total;
      },
      //判断购物车的起送价格状态
      payDec(){
        if(this.totalPrice === 0){
          return `￥${this.minPrice}起送`;
        }else if(this.totalPrice<this.minPrice){
          let diff = this.minPrice - this.totalPrice;
          return `还差￥${diff}起送`;
        }else{
          return `去结算`;
        }
      },
      //起送价格不同状态的动态添加和删除高亮的类
      payClass() {
        if (this.totalPrice < this.minPrice) {
          return 'not-enough';
        } else {
          return 'enough';
        }
      },
      listShow() {
        if (!this.totalCount) {
          this.fold = true;
          return false;
        }
        let show = !this.fold;
        if (show) {
          this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new BScroll(this.$refs.listContent, {
                click: true
              });
            } else {
              this.scroll.refresh();
            }
          });
        }
        return show;
      }
    },
    methods:{
      toggleList(){
        if (!this.totalCount) {
          return;
        }
        this.fold = !this.fold;
      },
      empty() {
        this.selectFoods.forEach((food) => {
          food.count = 0;
        });
      }
    },
    components: {
      cartControl
    }
}
</script>

<style scoped>
/*@import '../../assets/css/shopCart.css'*/
  .shopcart{
    width: 100%;
    height: 4.8rem;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #333;
    z-index: 999;
  }
  .content{
    display: flex;
    width: 100%;
    height: 100%;
    background: #141d27;
  }
  .content-left{
    flex:1;
  }
  .content-right{
    flex:0 0 auto;
    width: 10rem;
    background:#2b333b;
  }
  .content-left .logo-wrapper{
    display: inline-block;
    position: relative;
    top: -1rem;
    width: 5.6rem;
    height: 5.6rem;
    padding: 0.6rem;
    margin: 0 1.2rem;
    border-radius:50%;
    background: #141d27;
  }
  .content-left .logo-wrapper .logo{
    width: 100%;
    height: 100%;
    text-align: center;
    border-radius: 50%;
    background: #2b343c;
  }
  .content-left .logo-wrapper .logo.highlight{
    background:rgb(0, 160, 220);

  }
  .content-left .logo-wrapper .logo .fa-shopping-cart{
    font-size: 2.4rem;
    color: #80858a;
    line-height: 5rem;
  }
  .content-left .logo-wrapper .logo .fa-shopping-cart.highlight{
    color:#fff;
  }
  .content-left .logo-wrapper .num{
    position: absolute;
    top: 0;
    right: 0;
    width: 2.4rem;
    height: 2.4rem;
    line-height: 2.4rem;
    text-align: center;
    border-radius: 1.6rem;
    background: rgb(240,20,20);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
    color: #fff;
    font-size: 0.9rem;
    font-weight: 700;
  }
  .content-left .price{
    display: inline-block;
    vertical-align: top;
    margin-top: 1.2rem;
    line-height: 2.4rem;
    padding-right: 1.2rem;
    font-weight: 700;
    font-size: 1.6rem;
  }
  .content-left .price.highlight{
    color:#ffffff;
  }
  .content-left .desc{
    position: absolute;
    display: inline-block;
    vertical-align: top;
    line-height: 2.4rem;
    font-size: 1rem;
    margin-top: 1.2rem;
  }
  .content-right .pay{
    height: 4.8rem;
    line-height: 4.8rem;
    text-align: center;
    font-size: 1.2rem;
    color:rgba(255, 255, 255, 0.4);
    font-weight:700;
  }
  .content-right .pay.not-enough{
    background:#2b333b;
  }
  .content-right .pay.enough{
    background:#00b43c;
    color:#ffffff;
  }
  /*后面重新写一遍*/
  .shopcart-list{
    position:absolute;
    top:0;
    left:0;
    z-index:-1;
    width:100%;
    transform:translate3d(0, -100%, 0);
  }
  .shopcart-list .list-header{
    height:40px;
    line-height:40px;
    padding:0 18px;
    background:#f3f5f7;
    border-bottom:1px solid rgba(7, 17, 27, 0.1);  
  }
  .shopcart-list .list-header .title{
    float:left;
    font-size:14px;
    color:rgb(7, 17, 27);
  }
  .shopcart-list .list-header .empty{
    float:right;
    font-size:12px;
    color:rgb(0, 160, 220);
  }
  .shopcart-list .list-content{
    padding:0 18px;
    max-height:217px;
    overflow:hidden;
    background:#ffffff;
  }
  .shopcart-list .list-content .shopcart-food{
    position:relative;
    padding:12px 0;
    box-sizing:border-box;
  }
  .shopcart-list .list-content .shopcart-food .name{
    line-height:24px;
    font-size:14px;
    color:rgb(7, 17, 27);
  }
  .shopcart-list .list-content .shopcart-food .price{
    position:absolute;
    right:90px;
    bottom:12px;
    line-height:24px;
    font-size:14px;
    font-weight:700;
    color:rgb(240, 20, 20); 
  }
  .shopcart-list .list-content .shopcart-food .cartControl-wrapper{
    position:absolute;
    right:0;
    bottom:6px;
  }
</style>
