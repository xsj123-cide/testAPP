<template>
	<view class="login">
		<custom-nav :title="title" center  right>
			<view slot="right" @tap="toPath({url:'/pages/login/regist/regist'})">注册</view>
		</custom-nav>
		<view class="containera">
			<image class="icon" src='/static/icon/login/icon.png'></image>
			<p>135****0033</p>
			<view class="text-center">本机号码</view>
			<button class="loginButton" type="primary">同意协议并一键登录</button>
			<button class="aabuttom" @tap="toPath({url:'/pages/login/ortherLogin/ortherLogin'})">使用其他手机号登录</button>
			<view class="bottom position-absolute">
				<view> 登录即同意《使用协议》&《隐私政策》</view>
				<view>&《中国移动认证服务条款》</view>
			</view>

			<image class="imgLeft" src="/static/icon/login/bottom_left.png"></image>
			<image class="imgRight" src="/static/icon/login/borrom_right.png"></image>
		</view>
		
	</view>
</template>

<script>
	import { index} from '@/api/index.js'
	export default {
		data() {
			return {
				title:''
			}
		},
		onPullDownRefresh() {
			this.request()
		},
		onLoad() {
			console.log('1')
			this.request()
		},
		methods: {
			request() {
				console.log('2')
					index().then(res => {
						console.log(res)
					}).catch(() => setTimeout(() => this.$refs.ltm.toast('网络好像出了点问题，下拉刷新试试'), 123))
			},
		}
	}
</script>

<style lang="scss" scode>
@import './login'
</style>
