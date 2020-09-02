<template>
	<view class="sjcenter">
		<custom-nav  :title="title"  center noback></custom-nav>
		<view class="vedio">
			 <video id="myVideo" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4"
            		@error="videoErrorCallback" object-fit="fill"  controls poster='/static/img/index/zhanshi/video.png'></video>
		</view>
		<view class="loacation">
			当前城市行业： 杭州 > 家装财务
		</view>

		<view :class=" currentIndex==index? 'taocan active':'taocan' " v-for="(item,index) in taocanList" :key="index" @tap='changeIndex(index)'>
			<!-- 头部 -->
			<view class="taocan_top">
				<view class="image"><image :src="item.img"></image></view>
				<view class="top_right">
					<view class="top_right_top">
						<view class="title">
							<p>{{item.title}}</p>
							<p>{{item.youxiao}}</p>
						</view>
						<view class="buttom" @tap="buy">购买</view>
					</view>
					<view class="top_right_bottom">
						<span>￥</span><span>{{item.price}}</span>
					</view>
				</view>
			</view>
			<!-- 底部 -->
			<view class="taocan_bottom">
				<view class="taocan_top_item" v-for="(itema,indexa) in item.guize" :key="indexa">
					<span class="iconfont icon-quangou"></span><span>{{itema}}</span>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex:0,
				title:'商机中心',
				taocanList: [
					{
					'img':'/static/img/index/zhanshi/taocan.png',
					'title':'生活服务会员50套餐',
					'youxiao':'有效期365',
					'price':'2000',
					'guize' :[
						'高级店铺','店铺小程序','名片小程序','100次排名刷新','60个商家金币'
					]
					},
					{
					'img':'/static/img/index/zhanshi/taocan.png',
					'title':'生活服务会员50套餐',
					'youxiao':'有效期365',
					'price':'2000',
					'guize' :[
						'高级店铺','店铺小程序','名片小程序','100次排名刷新','60个商家金币'
					]
					},
					{
						'img':'/static/img/index/zhanshi/taocan.png',
						'title':'生活服务会员50套餐',
						'youxiao':'有效期365',
						'price':'2000',
						'guize' :[
							'高级店铺','店铺小程序','名片小程序','100次排名刷新','60个商家金币'
						]
					},
					{
						'img':'/static/img/index/zhanshi/taocan.png',
						'title':'生活服务会员50套餐',
						'youxiao':'有效期365',
						'price':'2000',
						'guize' :[
							'高级店铺','店铺小程序','名片小程序','100次排名刷新','60个商家金币'
						]
					},
					{
						'img':'/static/img/index/zhanshi/taocan.png',
						'title':'生活服务会员50套餐',
						'youxiao':'有效期365',
						'price':'2000',
						'guize' :[
							'高级店铺','店铺小程序','名片小程序','100次排名刷新','60个商家金币'
						]
					}
				]
			}
		},
		methods: {
			changeIndex(index) {
				this.currentIndex = index;
			},
			buy() {
				uni.navigateTo({
					url: `/pages/pay/payDetail/payDetail`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
@import './sjcenter.scss';
</style>
