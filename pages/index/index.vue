<template>
	<view class="index">
		<custom-nav class="title" :title="title" ref="ltm" color  noback left></custom-nav>
		<!-- 套餐选择 -->
		<view class="index-first">
			<span class="textOne">所属城市：厦门</span>
			<view class="first">
				<view  v-for="(item,index) in taocanList" :key="index" :class="activeIndex === index ? 'firstItem active':'firstItem'" @tap="changeIndex(index)">
						<span><span>{{item.num}}</span>条</span>
						<span>售价:{{item.price}}元</span>
				</view>
			</view>
		</view>
		<!--支付-->
		<view class="index-second">
			<view class="second-one">
				<p>支付金额</p>
				<view class="second-one-money">
					<span>￥</span>
					<span>0.2 <span>元</span> </span>
				</view>
			</view>
			<view class="second-two">
				<p>选择支付方式</p>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'购买套餐',
				activeIndex:0,
				taocanList:[
					{
						num: 2,
						price: 0.2
					},
					{
						num: 20,
						price: 333.0
					},
					{
						num: 30,
						price: 488.0
					},
					{
						num: 2,
						price: 588.0
					}
				]
			}
		},
		onLoad() {
		},
		methods: {
			changeIndex(index) {
				console.log('ppp')
				this.activeIndex = index;
				console.log(this.activeIndex)
			}
		}
	}
</script>

<style lang ='scss' scoped>
.index {
	@include page();
		.title {
		}
}
.index-first {
	padding: 10rpx 0rpx;
	background-color: white;
	.textOne {
		font-size: $font-size-medium;
		margin: 0  28rpx;
	}
	.first {
		width: 100%;
		@include flex();
		flex-wrap: wrap;
		.firstItem {
			@include flex(column);
			width: 28%;
			height: 164rpx;
			padding: 30rpx;
			border: $app-sec-text-color solid 1rpx;
			border-radius: 15rpx;
			margin: 20rpx;
			line-height: 50rpx;
			&>span:first-child {
				color: $app-base-color;
				font-size: $font-size-base;
				span:first-child {
				  font-size: $font-size-extra-lg;
				}
			}
			&>span:last-child {
				color: $app-sec-text-color;
				font-size: $font-size-base;
				letter-spacing: 1rpx;
			}
			}
		.active {
			border: $app-base-color solid 1rpx;
			background-color: rgba($color: $app-base-color, $alpha: 0.2);
		}
	}	
}
.index-second {
	padding: 28rpx;
	p {
		font-size: $font-size-base;
		font-weight: 900;
	}
	.second-one {
		padding: 30rpx;
		background-color: white;
		line-height: 90rpx;
		border-bottom: dashed $bg-color 10rpx;
		.second-one-money {
			@include flex(row,space-between);
			font-size: $font-size-big;
			&>span:last-child {
				&>span {
					font-size: $font-size-extra-lg;
				}
			}
			position: relative;			
		}
		.second-one-money::before,
		.second-one-money::after {
			position: absolute;
			bottom: -50%;
			content: '';
            width: 26px;
            height: 26px;
            background-color: $bg-color;
            border-radius: 50%;
		}
		.second-one-money::before {
			left: -45rpx;
			/* transform: rotate(45deg); */
		}
		.second-one-money::after {
			right: -45rpx;
			/* transform: rotate(-135deg); */
		}
	}
	.second-two {
		background-color: white;
		padding: 30rpx;
	}
}
</style>
