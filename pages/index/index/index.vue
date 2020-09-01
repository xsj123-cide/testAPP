<template>
	<view class="index">
		<!-- 头部 -->
		<view class="index-top">
			<image src="/static/img/index/top.png"/>
			<image src="/static/img/index/topa.png"/>
			<view class="textOne">
				<view class="textOne-left">
					<p>欢迎来到商机之家</p>
					<p>好商机，从这里开始</p>
				</view>
				<button>开通会员</button>
			</view>
		</view>

		<!-- 导航 -->
		<view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang='scss' scoped>
.index {
@include page();
border-top :none
}
.index-top{
		box-sizing: border-box;
		height: 320rpx;
		position: relative;
		image {
			display: block;
			position: absolute;
			width: 100%;
			height: 320rpx;
		}
		.textOne{
			width: 100%;
			height: 100%;
			color: white;
			position: absolute;
			@include flex(row, space-between);
			align-items: center;
			padding: 100rpx 54rpx;
			.textOne-left {
				font-size: $font-size-lg;
			}
			button {
				color: white;
				border-radius: 30rpx;
				font-size: $font-size-extra-sm;
				background: -webkit-linear-gradient(#fddd7d, #e17e0e);
				/* Safari 5.1 - 6.0 */
				background: -o-linear-gradient( #fddd7d, #e17e0e);
				/* Opera 11.1 - 12.0 */
				background: -moz-linear-gradient( #fddd7d, #e17e0e);
				/* Firefox 3.6 - 15 */
				background: linear-gradient(#fddd7d, #e17e0e);
			}
		}
}
</style>
