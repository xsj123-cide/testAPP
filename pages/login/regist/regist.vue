<template>
	<view class="ortherLogin">
		<custom-nav  :title="title"  center ></custom-nav>
		<view class="content">
			<!-- <view class="testOne">好商机从这里开始</view> -->
			<image class="icon" src='/static/icon/login/icon.png'></image>
			<view class="input">
				<view class="input_info">
					<!-- <image src='/static/icon/login/icon-tel.png'></image> -->
					<input type="text" placeholder="请输入手机号" @input ='phoneChange'>
				</view>
				<view class="input_info s-between">
					<view>
						<!-- <image src='/static/icon/login/login-sms.png'></image> -->
						<input type="text" placeholder="请输入验证码" @input ='CodeChange'>
					</view>
					<view @tap = 'getcode'>获取验证码</view>
				</view>
			</view>
			<!-- 手机登陆按钮 -->
			<button class="buttonOne" @tap='Login'> 登陆</button>
			<image class="imgLeft" src="/static/icon/login/bottom_left.png"></image>
			<image class="imgRight" src="/static/icon/login/borrom_right.png"></image>

		</view>
	</view>
</template>

<script>
	import { Login ,GetCode} from '@/api/login.js'
	export default {
		data() {
			return {
				title: '手机号注册',
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
				uni.switchTab({
					url: `/pages/index/index`
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
@import '../ortherLogin/ortherLogin.scss'
</style>
