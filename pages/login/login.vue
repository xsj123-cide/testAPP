<template>
	<view class="container flex-column">
		<img src='/static/icon/登录.png' alt="">
		<button class="loginButton" type="primary">本机号码一键登录</button>
		<view class="text-center">其他方式登录</view>
		<view class="bottom position-absolute">
			使用手机号码一键登录即带白哦您已同意《ssss》和《wwww》并使用本机号码登录
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

<style lang="scss" scode>
img {
	height: 100rpx;
	width: 100rpx;
	margin-top: 100rpx;;
}
button{
	background-color: $color-error;
	border-radius: 60rpx;
	font-size: $font-size-extra-lg;
}
.loginButton {
	margin-top: 330rpx;
}
.container {
	padding: 30rpx 50rpx;
	text-align: center;
}
.bottom {
 bottom: 30rpx;
 font-size: $font-size-base;
 color: gray;
}
.text-center {
	color: gray;
	padding-top: 30rpx;
	font-size: $font-size-sm;
}
</style>
