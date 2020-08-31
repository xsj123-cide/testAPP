<template>
	<view class="setting">
		<custom-nav  :title="title" ref="ltm" @lTap="back" color center></custom-nav>
		<!-- 菜单 -->
		<view class="mine-third">
			<view class="third-item"  v-for="(item,index) in itema" :key="index">
				<view>{{item}}</view>
				<view class="right"></view>
			</view>
		</view>
		<view class="mine-third">
			<view class="third-item">
				<view>检测更新</view>
				<view class="banben">
					当前版本9.8.8
					<view class="right"></view>
				</view>
			</view>
		</view>

		<view class="mine-third logout">
			退出登录
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'设置',
				itema:['服务协议','隐私政策']
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.setting {
	@include page();
}
.mine-third {
	margin: 20rpx 0rpx;
	background-color: white;
	padding: 0 40rpx;
	font-size: $font-size-lg;	
}
.banben {
	@include flex(row);
	color: rgb(170, 170, 170);
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
.logout {
	padding: 30rpx 0rpx;
	text-align: center;
	color: $app-base-color;
}
</style>
