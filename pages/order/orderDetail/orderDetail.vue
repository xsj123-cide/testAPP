<template>
	<view class="orderDetail">
		<custom-nav  :title="title"  center ></custom-nav>
		<view class="first">
			<!-- 详情头部 -->
			<view class="title">
				<view class="title_left">
					<span class="iconfont icon-mulu"></span>
					<span>订单编号： Fs8785748578558</span>
				</view>
				<view class="title_right"> 已量房</view>
			</view>
			<!-- 详情信息 -->
			<view class="first_items">
				<view class="item_name">装修业主:</view>
				<view class="item_content">陈先生</view>
			</view>
			<view class="first_items">
				<view class="item_name">联系电话:</view>
				<view class="item_content">18765445875</view>
			</view>
			<view class="first_items">
				<view class="item_name">qq微信:</view>
				<view class="item_content">454545454</view>
			</view>
			<view class="first_items">
				<view class="item_name">订单状态:</view>
				<view class="item_content bg">已确认</view>
			</view>
			<view class="first_items">
				<view class="item_name">量房状态:</view>
				<view class="item_content bg">已量房</view>
			</view>
			<view class="first_items">
				<view class="item_name">发布日期:</view>
				<view class="item_content">2019-08-21 14：21</view>
			</view>
			<view class="first_items">
				<view class="item_name">房屋地址:</view>
				<view class="item_content">汕头市金平区中山路-道路</view>
			</view>
			<view class="first_items">
				<view class="item_name">装修类型:</view>
				<view class="item_content">家装</view>
			</view>
			<view class="first_items">
				<view class="item_name">户型结构:</view>
				<view class="item_content">31平方小户型</view>
			</view>
			<view class="first_items">
				<view class="item_name">装修预算:</view>
				<view class="item_content">￥18-30万</view>
			</view>
			<view class="first_items">
				<view class="item_name">喜欢风格:</view>
				<view class="item_content">中心简约风格</view>
			</view>
			<view class="first_items">
				<view class="item_name ptop">
					<view>备注信息:</view>
				</view>
				<view class="item_content aa">
					<p>1.交房情况:旧日房子,30年了,业主说算是毛坯</p> 
					<p>2.量房见面时间:现在在看,量房再约</p>
					<p>3.预计动工时间:合适就动工</p>
					<p>4.装修</p>
				</view>
			</view>
		</view>
		<view class="second">
				<!-- 详情头部 -->
			<view class="second_title">
				<view class="title_left">
					<span class="iconfont icon-mulu"></span>
					<span>订单跟踪</span>
				</view>
			</view>
			<!-- 底部 -->
			<view class="second_bottom">
				<view class="second_bottom_item bor">
					<view class="iconfont icon-dagou bg"></view>
					<view class="step arrive">装修公司确认订单</view>
					<view class="time">2019-07-21 17:27:26</view>
				</view>
				<view class="second_bottom_item">
					<view class="iconfont icon-dagou"></view>
					<view class="step">【派单】：【刘子琪】派单企业【汕头新船装饰工程有限公司】</view>
					<view class="time">2019-07-21 17:27:26</view>
				</view>
				<view class="second_bottom_item">
					<view class="iconfont icon-dagou"></view>
					<view class="step">派单成功，等待装修公司确认</view>
					<view class="time">2019-07-21 17:27:26</view>
				</view>
				<view class="second_bottom_item">
					<view class="iconfont icon-dagou"></view>
					<view class="step">商务人员正在派单</view>
					<view class="time">2019-07-21 17:27:26</view>
				</view>
			</view>

		</view>
		<!-- 底部按钮 -->
		<view class="bottomButom">
			<view class="bottomButom_item">
				<span class="iconfont icon-phone"></span> 联系业主
			</view>
			<view class="bottomButom_item">
				<span class="iconfont icon-web-icon-"></span> 添加回访
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'订单详情'
			}
		},
		methods: {
			
		}
	}
</script>

<style lang='scss' scoped>
@import './orderDetail.scss'
</style>
