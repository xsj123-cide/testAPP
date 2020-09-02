<template>
	<view class="payDetail">
		<custom-nav  :title="title"  center ></custom-nav>
		<view class="pay_top">
			<view>
				<p>支付金额</p>
				<view class="second_pay_money">
					<span>￥</span><span>2000</span><span>元</span>
				</view>
			</view>
			<!-- 选择支付方式 -->
			<view style="margin-top:20rpx">
				<p>选择支付方式</p>
				<view>
					<radio-group @change="radioChange">
						<label class="second_pay" v-for="(item, index) in items" :key="item.value">
							<view class="second_pay_left">
								<image :src = 'item.icon' />
								{{item.name}}
							</view>
							<view>
								<radio :value="item.value" color="rgba(238, 90, 84, 0.2)" :checked="index === current" />
							</view>
						</label>
					</radio-group>
				</view>
			</view>
		</view>

	
		<!-- 详情 -->
		<view class="detail">
			<view class="detail_item">
				<view class="name">服务项目</view>
				<view class="contentb aa">生活服务会员50套餐</view>
			</view>
			<view class="detail_item">
				<view class="name">推广城市</view>
				<view class="contentb">杭州</view>
			</view>
			<view class="detail_item">
				<view class="name">推广行业</view>
				<view class="contentb">家装服务+工装服务</view>
			</view>
			<view class="detail_item">
				<view class="name">套餐内容</view>
				<view class="contentb bb">高级店铺  |  店铺小程序  |  名片小程序 100次排名刷新  |  20个商家金币</view>
			</view>
		</view>
		<view class="tiaokuan">
			<view class="iconfont icon-dagou"></view>
			已阅读并同意《商家之家网络服务通用条款》
		</view>
		<!-- Button -->
		<button class="buttonOne" > 立即付款</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'支付详情',
				current: 0,
				items: [
					 {
						value: 'zhifu',
						name: '支付宝支付',
						icon: '/static/icon/index/zhipay.png',
						checked:true
					},
					{
						value: 'WX',
						name: '微信支付',
						icon: '/static/icon/index/WX.png',
					},
					{
						value: 'yue',
						name:'银行卡支付',
						icon: '/static/icon/index/money.png',

					 },
				]
			}
		},
		methods: {
			radioChange: function(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				}
			},
		}
	}
</script>

<style lang='scss'  scoped>
@import './payDetail.scss';
</style>
