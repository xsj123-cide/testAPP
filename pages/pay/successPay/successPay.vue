<template>
	<view class="successPay">
		<!-- <custom-nav></custom-nav> -->
			<view class="pay-success-top">
				<image src="/static/img/pay-success-top.png"/>
			</view>
			<view class="pay-top">
				<image class="pay-top-bar" src="/static/img/pay-top-bar.png" alt="">
				<view class="pay-top-info">
					<view class="pti-content">￥<span class="pti-price" id="amount">0.2</span>元</view>
				</view>
				<view class="order-infoa">
					<view class="order-info-item">
						<view>支付时间：</view>
						<view class="oii-value"  id="createTime">
							{{payTime}}
						</view>
					</view> 
					<view class="order-info-item">
						<view>订单号：</view>
						<view class="oii-value"  id="orderNo">
							{{orderNo}}
						</view>
					</view> 
				</view>
			</view>	

			<!-- 返回按钮 -->
			<button class="back" @click="back">返回</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				payTime:'2020-09-31 11:58:01',
				orderNo:'SJ1515AS5DSADASDASD'
			}
		},
		methods: {
			
		}
	}
</script>

<style lang='scss' scoped>
.successPay {
	@include page();
	border-top :none
}
.pay-success-top {
		box-sizing: border-box;
		background-color: $app-base-color;
		height: 400rpx;
		image {
			display: block;
			width: 100%;
			height: 270rpx;
		}
}
.pay-top {
	margin-top: -84rpx;	
	image {
			display: block;
			width: 100%;
			height: 43.04rpx;
		}
}
.pay-top-bar {
	display: block;
	width: 100%;
}
.pay-top-info {
	margin: 0 auto;
	background: #fff;
	width: 92%;
	height: 230rpx;
	border-bottom: 1px dashed #eaeaea;
	z-index: 110;
	.pti-content {
	padding: 65rpx 0;
	font-size: 60rpx;
	line-height: 1.73rem;
	align-items: center;
	text-align: center;
	.pti-price {
		font-size: 100rpx;
	}
	}
}
.order-infoa {
		background: #fff;
		margin: 0 auto;
		height: 140rpx;
		width: 92%;
		margin-bottom: 70rpx;
		border-bottom-left-radius: 15rpx;
		border-bottom-right-radius: 15rpx;
		padding: 20rpx 40rpx;
		line-height: 48rpx;
		.order-info-item {
		@include flex(row,space-between);
		font-size: $font-size-medium;
		color: $app-sec-text-color;
		.oii-value {
			color: black;
		}
		}
}
.back {
	width: 90%;
	padding: 10rpx;
	color: white;
	margin-top: 60rpx;
	border-radius: 50rpx;
	margin: 0 auto;
	background: -webkit-linear-gradient(left, #ff3f4c, #fe7251);
	/* Safari 5.1 - 6.0 */
	background: -o-linear-gradient(right, #ff3f4c, #fe7251);
	/* Opera 11.1 - 12.0 */
	background: -moz-linear-gradient(right, #ff3f4c, #fe7251);
	/* Firefox 3.6 - 15 */
	background: linear-gradient(to right, #ff3f4c, #fe7251);
	box-shadow: .2rem .2rem .6rem rgba(254, 114, 81, .6);
}
</style>
