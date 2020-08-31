<template>
	<view class="order">
		<custom-nav  :title="title" ref="ltm" color noback center></custom-nav>
		<!-- 搜索框 -->
		<view class="search">
			<image src="/static/icon/order/search.png" />
			<input type="text" name="" id="" placeholder="输入业主/小区/订单号">
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'派给我的订单(0/20)'
			}
		},
		methods: {
			
		}
	}
</script>

<style lang='scss'scoped>
.order {
	@include page()
}
.search {
	margin:20rpx 0rpx ;
	height: 80rpx;
	display: flex;
	align-items: center;
	background-color: white;
	padding: 0rpx 20rpx;
	justify-content: center;
	input {
		margin: 0rpx 20rpx;
	}
	image {
		height: 50rpx;
		width: 50rpx;
	}
}
</style>
