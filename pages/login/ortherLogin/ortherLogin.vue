<template>
	<view class="ortherLogin">
		<custom-nav  :title="title" ref="ltm" color center noback></custom-nav>
		<view class="content">
			<view class="testOne">好商机从这里开始</view>
			<view class="input">
				<view class="input_info">
					<image src='/static/icon/login/icon-tel.png'></image>
					<input type="text" placeholder="请输入手机号" @input ='phoneChange'>
				</view>
				<view class="input_info s-between">
					<view>
						<image src='/static/icon/login/login-sms.png'></image>
						<input type="text" placeholder="请输入验证码" @input ='CodeChange'>
					</view>
					<view @tap = 'getcode'>获取验证码</view>
				</view>
			</view>
			<!-- 手机登陆按钮 -->
			<button class="loginButton" @tap='Login'> 手机登陆</button>
		</view>
	</view>
</template>

<script>
	import { Login ,GetCode} from '@/api/login.js'
	export default {
		data() {
			return {
				title: '商机之家',
				phoneNum:'',
				passCode:'',
			};
		},
		// onPullDownRefresh() {
		// 	this.request()
		// },
		onLoad() {
			console.log('login...')
		},
		methods: {
			Login() {
				this.request()
			},
			getcode() {
				console.log('getcode...')
					let data = {
						mobile: this.phoneNum,
						type:2
					};
					GetCode(data).then(res => {
						console.log(res)
				})
			},
			phoneChange(e) {
				console.log(this.phoneNum)
				this.phoneNum = e.detail.value
			},
			CodeChange(e) {
				this.passCode = e.detail.value
			},
			request() {
				// 	console.log('request...')
				// 	let data = {};
				// 	data.mobile = this.phoneNum;  
				// 	data.code = this.passCode ;     
				// 	// data.pushClientInfo=JSON.stringify(common.getCache("pushClientInfo"));
				// 	Login(data).then(res => {
				// 		if(res.code == 1) {
				// 			uni.setStorageSync('userInfo', res.data.userInfo); 
				// 			uni.switchTab({
				// 				url: `/pages/index/index`
				// 			})
				// 		}
				// })
				uni.switchTab({
					url: `/pages/index/index`
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
.ortherLogin {
	@include page();
	background-color: white;
}
.testOne {
	margin: 20rpx;
	font-size: $font-size-lg;
	text-align: center;
}
.content {
	padding: 0rpx 95rpx;
}
.input {
	margin-top: 80rpx;
	.input_info {
		@include flex(row);
		border-bottom: rgb(224, 222, 222) solid 1rpx;
		padding: 20rpx;
		image{
			height: 45rpx;
			width: 45rpx;
			margin-right: 20rpx;
		}
		input {
			font-size: 28rpx;
		}
	}
	.s-between {
		&>view {
			@include flex(row)
		}
		&>view:last-child {
			color: $app-base-color;
		}
		@include flex(row,space-between);
		font-size: 28rpx;
	}
}
.loginButton {
	margin: 60rpx 0rpx;
	text-align: center;
	color: white;
	font-size: 28rpx;	
	border-radius: 50rpx;
	background-color: $app-base-color;
}
</style>
