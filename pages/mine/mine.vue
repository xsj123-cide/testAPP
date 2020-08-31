<template>
	<view class="mine">
		<custom-nav  :title="title" ref="ltm" color  noback left></custom-nav>
		<!-- 我的头像 -->
		<view class="mine-first">
			<view class="image">

			</view>
			<p>{{username}}</p>
		</view>
		<!-- 账户余额 -->
		<view class="mine-second">
			<p>账户余额</p>
			<view><span>00.0</span>元</view>
		</view>
		<!-- 菜单 -->
		<view class="mine-third">
			<view class="third-item"  v-for="(item,index) in itema" :key="index"  @tap="toPath({url:item.url})">
				<view >{{item.name}}</view>
				<view class="right"></view>
			</view>
		</view>
		<!-- 设置 -->
		<view class="setting">
			<view class="third-item" @tap="toPath({url:`/pages/mine/setting/setting`})">
				<view >设置</view>
				<view class="right"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '我',
				username:'湘湘',
				itema: [
					{
						name:'我的资料',
						url:'/pages/mine/myInfo/myInfo'
					},
					{
						name:'已买套餐',
						url:'/pages/mine/myTaocan/myTaocan'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.mine {
	@include page();
}
.mine-first {
	margin: 20rpx;
	padding-bottom: 50rpx;;
	background-color: white;
	@include flex(column);
	font-size: $font-size-lg;
	.image {
		width:150rpx;
		height:150rpx;
		margin: 20rpx;
		background-color: rgb(212, 212, 212);
		border-radius: 100rpx;
	}
}
p {
	font-size: $font-size-lg;
}
span {
	font-size: $font-size-big;
	font-weight: 800;
}
.mine-second {
	padding: 30rpx 100rpx;
	line-height: 100rpx;
	background-color: white;
}
.mine-third {
	margin: 20rpx 0rpx;
	background-color: white;
	padding: 0 40rpx;
	font-size: $font-size-lg;	
}
.third-item {
		@include flex(row,space-between);
		padding: 30rpx 0rpx;
		border-top: solid rgba(192, 192, 192,0.9) 1rpx;
		.right {
		height: 20rpx;
		width: 20rpx;
		transform: rotate(45deg);
		border-top: 1rpx solid $text-color-assist;
		border-right: 1rpx solid $text-color-assist;
		}
		&:first-child {
			border-top: 0rpx;
		}
	}
.setting {
	background-color: white;
	padding: 0 40rpx;
	font-size: $font-size-lg;
}
</style>
