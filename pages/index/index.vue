<template>
	<view class="index">
		<custom-nav class="title" 
		:title="title" ref="ltm" color  noback left 
		:modalShow='modalShow' 
		@cancel = "cancelShow" 
		@confire = 'confire'
		:modalTitle='modalTitle'
		:modalMessages = 'modalMessages'></custom-nav>
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
					<span>{{currentMoney}} <span>元</span> </span>
				</view>
			</view>
			<view class="second-two">
				<p>选择支付方式</p>
				<!-- <view class="second-two-yu"> 账户余额支付(余额：00.0元) </view> -->
				<view class="second-two-yu">
					<radio-group @change="radioChange">
						<label class="second-pay" v-for="(item, index) in items" :key="item.value">
							<view class="second-pay-left">
								<image :src = 'item.icon' />
								{{item.name}}
							</view>
							<view>
								<radio :value="item.value" color="rgba(238, 90, 84, 0.2)" :checked="index === current" />
							</view>
						</label>
					</radio-group>
				</view>
			</view>
		</view>
		<!-- 支付按钮 -->
		<button class="buttonOne" @tap="show">立即支付</button>

		<!-- 遮罩 -->
		<!-- <view class="zhezao"></view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'购买套餐',
				modalTitle:'支付提醒',
				activeIndex:0,
				current: 0,
				currentMoney:0,
				modalShow:false,
				modalMessages : ['确定要账户余额支付吗'],
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
				],
				 items: [
					 {
						value: 'yue',
						name:'账户余额支付(余额：00.0元)',
						icon: '/static/icon/index/money.png',
						checked:true
					 },
					 {
						value: 'zhifu',
						name: '支付宝支付',
						icon: '/static/icon/index/zhipay.png',
					},
					{
						value: 'WX',
						name: '微信支付',
						icon: '/static/icon/index/WX.png',
					},
				]
			}
		},
		created() {
			this.currentMoney = this.taocanList[0].price
		},
		methods: {
			changeIndex(index) {
				console.log('ppp')
				this.activeIndex = index;
				this.currentMoney = this.taocanList[index].price
				console.log(this.activeIndex)
			},
			radioChange: function(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				}
			},
			show(){
				this.modalShow = true;
				let nowindex = this.current;
				this.modalMessages[0] = '确定要'+this.items[nowindex].name+'吗？';
			},
			cancelShow() {
				this.modalShow = false;
			},
			confire ()  {
				 uni.navigateTo({
                        url: `/pages/pay/successPay/successPay`
                    })
			}
		}
	}
</script>

<style lang ='scss' scoped>
.index {
	@include page();
	position: relative;
}
.zhezao {
	position: fixed;
	width: 100%;
	height: 100%;
	z-index: 999;
	background: rgba($color: #000000, $alpha: 0.4);
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
			border: rgba($color: $app-sec-text-color, $alpha: 0.4) solid 1rpx;
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
		font-size: $font-size-base !important;
		font-weight: 900;
	}
	.second-one {
		padding: 30rpx;
		background-color: white;
		line-height: 70rpx;
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
			bottom: -65%;
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
		font-size: $font-size-lg;
		.second-two-yu {
			margin-top: 40rpx;
		}
		.second-pay {
		padding: 20rpx 0rpx;
		@include flex(row,space-between);
		border-top: 1rpx solid rgba($color: $app-sec-text-color, $alpha: 0.4);
		&:first-child {
			border-top: none;
		}
		.second-pay-left {
			@include flex(row);
			align-items: center;
		}
		image {
			height: 45rpx;
			width: 50rpx;
			margin-right: 20rpx;
		}
		}
	}
}
.buttonOne {
	position: fixed;
	bottom: 100rpx;
	width: 90%;
	left: 0rpx;
	right: 0rpx;
	margin: 0 auto;
	padding: 5rpx;
	color: white;
	font-size: $font-size-lg;
	border-radius: 50rpx !important;
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
