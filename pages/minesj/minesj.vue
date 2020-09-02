<template>
	<view cl ass='minesj'>
		<custom-nav  :title="title"  center right>
			<view slot="right">时间</view>
		</custom-nav>
		<view class="top">
			<image class="top_back" src="/static/img/wosj/topa.png"></image>
			<image class="top_right" src="/static/img/wosj/topb.png"></image>
			<view class="top_left">
				<view class="top_left_item">
					<p>81</p>
					<p>剩余单量</p>
				</view>
				<view class="top_left_item">
					<p>81</p>
					<p>剩余单量</p>
				</view>
				<view class="top_left_item">
					<p>81</p>
					<p>剩余单量</p>
				</view>
			</view>
		</view>
		<!-- 菜单项 -->
		<view class="caidan">
			<view :class="currentIndex==index?  'caidan_item active':'caidan_item'" @tap="changeIndex(index)" v-for="(item,index) in caidanList" :key="index">
				{{item}}
			</view>
		</view>
		<!-- 订单列表 -->
		<view class="order"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'我的商机',
				currentIndex:0,
				caidanList:[
					'新商机',
					'跟进中',
					'已成单',
					'已放弃'
				]
			}
		},
		methods: {
			changeIndex(index) {
				this.currentIndex = index
			}

		}
	}
</script>

<style lang="scss" scoped>
@import './minesj.scss'
</style>
