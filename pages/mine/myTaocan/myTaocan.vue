<template>
	<view class="myTaocan">
		<custom-nav  :title="title" ref="ltm" @lTap="back" color center right>
			<view slot="right">剩余22单</view>
		</custom-nav>
		<view class="mine-third">
			<view class="third-item"  v-for="(item,index) in itema" :key="index">
				<view class="third-item-top">
					<view>购买金额： {{item.price}} 元</view>
					<view>购买{{item.num}}单</view>
				</view>
				<view> 购买时间： {{item.Time}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'购买的套餐',
				itema:[
					{
						price: 338,
						Time: '2020-08-31 11:24',
						num: 20
 					},
					{
						price: 338,
						Time: '2020-08-31 11:24',
						num: 20
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang='scss' scoped>
.myTaocan {
@include page()
}
.mine-third {
	margin: 20rpx 0rpx;
	background-color: white;
	padding: 0 40rpx;
	font-size: $font-size-lg;	
}
.third-item {
		@include flex(column);
		align-items: flex-start;
		padding: 30rpx 0rpx;
		line-height: 45rpx;
		border-top: solid rgba(192, 192, 192,0.9) 1rpx;
		.third-item-top {
			width: 100%;
			@include flex(row,space-between);
			&>:last-child {
			color: gray;
			font-size: 28rpx;
		}
		}
		&:first-child {
			border-top: 0rpx;
		}
		&>:last-child {
			color: gray;
			font-size: 28rpx;
		}
	}
</style>
