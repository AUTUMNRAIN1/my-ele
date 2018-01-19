<template>
  <div class="star" :class="starType">
  		<span v-for="itemClass in itemClasses" :class="itemClass" class="star-item"></span>
  </div>
</template>

<script>
const LENGTH = 5;
	const CLS_ON = 'on';
	const CLS_HALF = 'half';
	const CLS_OFF = 'off';

	export default {
		props:{
			size:{
				type:Number
			},
			score:{
				type:Number
			}
		},
		computed:{
			starType(){
				return 'star-'+this.size;
			},
			itemClasses(){
				let result = [];
				let score = Math.floor(this.score*2)/2;
				// 判断分数不是整数
				let hasDecimal = score%1!==0;
				let integer = Math.floor(score);
				for (let i = 0;i<integer;i++){
					result.push(CLS_ON);
				}
				if(hasDecimal){
					result.push(CLS_HALF);
				}
				while(result.length<LENGTH){
					result.push(CLS_OFF);
				}
				return result
			}
		}
	}
</script>

<style>
.star{
	font-size:0;
}
.star .star-item{
	display:inline-block;
	background-repeat:no-repeat;
	width: 10px;
	height: 10px;
	margin-right: 3px;
	background-size: 10px 10px;
}
</style>
