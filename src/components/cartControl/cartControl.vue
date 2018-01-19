<template>
  <div class="cartControl">
    <transition name="fade">
      <div class="cart-decrease" @click.stop.prevent="decreaseCart($event)">
        <i class="fa fa-minus-circle" aria-hidden="true" v-show="food.count>0"></i>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add" @click.stop.prevent="addCart($event)">
      <i class="fa fa-plus-circle" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  props:{
    food:{
      type:Object
    }
  },
  methods:{
    addCart(event){
      console.log(this.food.count);
      if(!this.food.count){
        Vue.set(this.food,"count",1);
      }else{
        this.food.count++;
      }
      this.$emit('increment', event.target); // 子组件通过 $emit触发父组件的方法 increment   还
    },
    decreaseCart(event){
      if (!event._constructed) {
          // 去掉自带click事件的点击
          return;
      }
      this.food.count--;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .cart-decrease,.cart-count,.cart-add{
      display: inline-block;
    }
    .cart-decrease,.cart-add{
      padding: 0.4rem 0.6rem 0.6rem;
      font-size: 2rem;
      color: #00a0dc;
    }
    .cart-count{
      vertical-align: top;
      font-size: 15px;
      line-height: 34px;
    }
    .fade-enter-active,.fade-leave-active{
      transition: all 0.4s linear;
    }
    .fade-enter, .fade-leave-to{
      opacity: 0;
      transform:translate3d(24px, 0, 0);
    }

    
</style>
