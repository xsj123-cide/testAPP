<template>
	<view class="huiyuan">
		<custom-nav  :title="title"  center ></custom-nav>
		<view class="huiyuan_first">
			<p>请完善信息</p>
			<p>请选择您的服务区域和服务类型</p>
			<!-- 类型 -->
			<view class="type">
				<view class="">
					<image src="/static/img/huiyuan/geren.png"></image>
					<p>个人</p>
				</view>
				<view>
					<image src="/static/img/huiyuan/gongsi.png"></image>
					<p>企业</p>
				</view>
			</view>
			<!-- info -->
			<view class="infoItem">
				<view class="itemName">城市</view>
				<view class="input">
					<input type="text" placeholder="请输入城市">
				</view>
			</view>
			<view class="infoItem">
				<view class="itemName">行业</view>
				<view class="input">
					<input type="text" placeholder="请输入行业">
				</view>
			</view>



		</view>

		<!-- button -->
		<button class="buttonOne" @tap="ok">确定</button>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				title:'开通会员'
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
@import './huiyuan.scss';
</style>
