<template>
	<view class="minedp">
		<custom-nav  :title="title"  center right>
			<view slot="right">编辑</view>
		</custom-nav>
		<view class="dptop">
			<!-- <image src="/static/img/dp/top.png"></image> -->
			<view class="dianp">
				<view></view>
				<view></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'店铺管理'	
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
@import './minedp'
</style>
