<template>
	<view class="minedp">
		<custom-nav  :title="title"  center right>
			<view slot="right">编辑</view>
		</custom-nav>
		<!--  -->
		<view class="dptop">
			<!-- <image src="/static/img/dp/top.png"></image> -->
			<view class="dianp">
				<view class="dianptop">
					<image src='/static/img/index/zhanshi/dianp.png'></image>
					<view class="dianptop_right">
						<p>宅天下装修建筑</p>
						<p>案例：0 | 设计师： 0</p>
					</view>
				</view>
				<view>
					<view  class="dianp_bottom_one">
						<view v-for="(item,index) in 5" :key="index" class="iconfont icon-collection-b"></view>
						<view class="zixun">已有1289人咨询</view>
					</view>
					<view class="dianp_bottom_two">
						<view class="iconfont icon-dingwei"></view>
						春熙路小科甲象第一城B座4楼
					</view>
				</view>
			</view>
		</view>

		<!--  -->
		<image class="media" src="/static/img/index/zhanshi/media.png"></image>
		<!-- bottom -->
		<view class="dp_bottom">
			<p>经典案例</p>
			<view class="anli">
				<view class="anliItem">
					<image src="/static/img/index/zhanshi/fangtu.png"/>
					<view>香山美术</view>
				</view>
				<view class="anliItem">
					<image src="/static/img/index/zhanshi/fangtu.png"/>
					<view>香山美术</view>
				</view>
				<view class="anliItem">
					<image src="/static/img/index/zhanshi/fangtu.png"/>
					<view>香山美术</view>
				</view>
				<view class="anliItem">
					<image src="/static/img/index/zhanshi/fangtu.png"/>
					<view>香山美术</view>
				</view>

			</view>
		</view>
		<view class="dp_bottom">
			<p>设计团队</p>
			<view class="anli">
				<view class="anliItemb" v-for="(item,index) in 10" :key="index">
					<image src="/static/img/index/zhanshi/fangtu.png"/>
					<view>曾明</view>
					<view>资深设计师</view>
				</view>
			</view>
		</view>
		<view class="dp_bottom">
			<p>公司资源</p>
			<view class="anli">
				<view class="anliItemc" v-for="(item,index) in 10" :key="index">
					<image src="/static/img/index/zhanshi/jiangpai.png"/>
					<view>服务，诚信aaa级企业</view>
				</view>
			</view>
		</view>
		<view class="dp_bottom">
			<p>公司介绍</p>
			<view class="bottom_article">
				四川宅天下建筑装饰工程有限公司成立于2006年，专业致力于一站式整体家装服务，坚持健康环保、诚信为本、客户之上的企业文化凭借多年的项目施工与整
				合运营经验，不仅全新定义了一站式整体家装模式，也定义了品牌家装的价格为基准
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
