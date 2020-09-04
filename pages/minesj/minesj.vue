<template>
	<view class='minesj'>
		<custom-nav  :title="title"  center right>
			<view slot="right">时间</view>
		</custom-nav>
		<navbar currenIndexa='3'></navbar>
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
		<view class="order" v-for="(item,index) in orderList" :key="index">
			<view class="order_top">
				<view class="top_left">
					<span class="iconfont icon-mulu"></span>
					<span>订单编号 : {{item.orderNo}}</span>
				</view>
				<view class="top_right">
					详情 >
				</view>
			</view>
			<view class="order_mediu">
				<view class="mediu_item">
					<span>业&#12288;&#12288;主：</span>
					<span>{{item.yezu}}</span>
				</view>
				<view class="mediu_item">
					<span>建筑面积：</span>
					<span>{{item.area}} m<sup>2</sup></span>
				</view>
				<view class="mediu_item">
					<span>户型结构：</span>
					<span>{{item.gou}}</span>
				</view>
				<view class="mediu_item">
					<span>小区地址：</span>
					<span>{{item.address}}</span>
				</view>	
			</view>
			<div class="dashed"></div>
			<view class="order_bottom">
				<view class="bottom_left">
					<span class="iconfont icon-huabanfuben"></span>
					<span>{{item.time}}</span>
				</view>
				<view class="bottom_right" v-if="currentIndex == 0" @tap="toPath({url:`/pages/order/orderDetail/orderDetail`})">
					待确认
				</view>
				<view class="bottom_right" v-if="currentIndex == 1">
					跟进中
				</view>
				<view class="bottom_right" v-if="currentIndex == 2">
					已成单
				</view>
				<view class="bottom_right" v-if="currentIndex == 3">
					已放弃
				</view>
			</view>
		</view>
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
				],
				orderList:[
					{
						orderNo:'sdadadada12as',
						yezu: '汤成名先生',
						area: 186,
						gou: '5室2厅2卫',
						address: '华润置地中央公园',
						time: '2020/08/10 09:58'
					},
					{
						orderNo:'sdadadada12as',
						yezu: '汤成名先生',
						area: 186,
						gou: '5室2厅2卫',
						address: '华润置地中央公园',
						time: '2020/08/10 09:58'
					},
					{
						orderNo:'sdadadada12as',
						yezu: '汤成名先生',
						area: 186,
						gou: '5室2厅2卫',
						address: '华润置地中央公园',
						time: '2020/08/10 09:58'
					},
					{
						orderNo:'sdadadada12as',
						yezu: '汤成名先生',
						area: 186,
						gou: '5室2厅2卫',
						address: '华润置地中央公园',
						time: '2020/08/10 09:58'
					},
					{
						orderNo:'sdadadada12as',
						yezu: '汤成名先生',
						area: 186,
						gou: '5室2厅2卫',
						address: '华润置地中央公园',
						time: '2020/08/10 09:58'
					},
					{
						orderNo:'sdadadada12as',
						yezu: '汤成名先生',
						area: 186,
						gou: '5室2厅2卫',
						address: '华润置地中央公园',
						time: '2020/08/10 09:58'
					}
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
