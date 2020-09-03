<template>
	<view class="msCenter">
		<custom-nav  :title="title"  center ></custom-nav>
		<view class="ms_item" v-for="(item,index) in msList" :key="index">
			<!-- 头部 -->
			<view class="item_top">
				<view class="top_left">
					<image :src="item.icon" />
					<view>{{item.title}}</view>
				</view>
				<view class="top_right">
					{{item.time}}
				</view>
			</view>
			<!-- 中部 -->
			<view class="item_media">
				{{item.message}}
			</view>
			<!-- 底部 -->
			<view class="item_bottom" @tap="toPath({url:'/pages/msCenter/msDetail/msDetail'})">
				<view>查看详情</view>
				<view class="iconfont icon-youjiantou1"></view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'信息中心',
				msList: [
					{
						icon:'/static/img/index/zhanshi/iconOne.png',
						title:'系统消息',
						time:'13:28',
						message:`凤凰家-国内互联网知名装修平台,汇集了全国优质品 牌装修公
				司,装饰公司,装修设计公司,为业主提供高性ssssssssssssss`,
					},
					{
						icon:'/static/img/index/zhanshi/iconOne.png',
						title:'系统消息',
						time:'13:28',
						message:`凤凰家-国内互联网知名装修平台,汇集了全国优质品 牌装修公
				司,装饰公司,装修设计公司,为业主提供高性ssssssssssssss`,
					},
					{
						icon:'/static/img/index/zhanshi/iconOne.png',
						title:'系统消息',
						time:'13:28',
						message:`凤凰家-国内互联网知名装修平台,汇集了全国优质品 牌装修公
				司,装饰公司,装修设计公司,为业主提供高性ssssssssssssss`,
					},
					{
						icon:'/static/img/index/zhanshi/iconOne.png',
						title:'系统消息',
						time:'13:28',
						message:`凤凰家-国内互联网知名装修平台,汇集了全国优质品 牌装修公
				司,装饰公司,装修设计公司,为业主提供高性ssssssssssssss`,
					},
					{
						icon:'/static/img/index/zhanshi/iconOne.png',
						title:'系统消息',
						time:'13:28',
						message:`凤凰家-国内互联网知名装修平台,汇集了全国优质品 牌装修公
				司,装饰公司,装修设计公司,为业主提供高性ssssssssssssss`,
					},
					{
						icon:'/static/img/index/zhanshi/iconOne.png',
						title:'系统消息',
						time:'13:28',
						message:`凤凰家-国内互联网知名装修平台,汇集了全国优质品 牌装修公
				司,装饰公司,装修设计公司,为业主提供高性ssssssssssssss`,
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>


<style lang="scss" scoped>
@import './msCenter.scss';
</style>

