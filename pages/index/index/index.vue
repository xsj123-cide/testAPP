<template>
	<view class="index">
		<!-- 头部 -->
		<index-tou></index-tou> 
		<view class="contenta">
			<!-- 导航 -->
			<index-daohang></index-daohang>

			<!-- 商机学院 -->
			<view class="index-second">
				<!-- 标题 -->
				<view class="title">
					<p>商机学院</p>
					<view class="title-texOne">
						<view>进入商机学院</view>
						<view>></view>
					</view>
				</view>

				<!-- 学院item -->
				<view class="secondTwo">
					<view class="secondTwo_item" v-for="(item,index) in zhiboList" :key="index">
						<image :src= 'item.url'/>
						<view class="bottom">
							<view class="bottom_title">
								<view  class="iten_Text2">{{item.title}}</view>
								<view v-if="item.jing == true" class="jingp"> 精品</view>
							</view>
							<view class="item_icon">
								<view>
									<view class="iconfont icon-kanguo" ></view>
									<span>{{item.yikan}}</span>
								</view>
								<view>
									<view class="iconfont icon-collection" ></view>
									<span>{{item.shouc}}</span>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view v-if="modalShow ==true" class="zhezhao"></view>
		<view v-if="modalShow ==true" :class="modalShow? 'in tanc' :'out'">
			<image class="imgright" src="/static/img/index/tan_right.png"></image>
			<image class="imgleft" src="/static/img/index/tan_left.png"></image>
			<view class="tan_title">欢迎使用商家之家</view>
			<view class="tan_content">
				为了更好地保护您的权益，同时遵守相关监管要求。我们将
				通过《隐私政策》向您说明我们会如何收集、存储、保护和使用您的信息。
			</view>
			<view class="tan_button">
				<button class="buttonOne" @tap="quxiao">取消</button>
				<button class="buttonTwo" @tap="quxiao">同意</button>
			</view>
		</view>
	</view>
</template>

<script>
	import indexTou from "components/index/index-tou.vue";
	import indexDaohang from "components/index/index-daohang.vue";
	export default {
		components: {
			indexTou,
			indexDaohang
		},
		data() {
			return {
				itemList:{},
				modalShow:true,
				zhiboList:[
					{
						url: '/static/img/index/zhanshi/zhiboa.png',
						title: '直播报名 | 教你ssssssssssssssss',
						yikan: '180万',
						jing:true,
						shouc: '5'
					},
					{
						url: '/static/img/index/zhanshi/zhiboa.png',
						title: '直播报名 | 教你ssssssssssssssss',
						yikan: '180万',
						jing:true,
						shouc: '5'
					},
					{
						url: '/static/img/index/zhanshi/zhiboa.png',
						title: '直播报名 | 教你ssssssssssssssss',
						yikan: '180万',
						jing:true,
						shouc: '5'
					},
					{
						url: '/static/img/index/zhanshi/zhiboa.png',
						title: '直播报名 | 教你ssssssssssssssss',
						yikan: '180万',
						jing:false,
						shouc: '5'
					}
				]
			}
		},
		methods: {
			quxiao() {
				this.modalShow = false;
			}
		}
	}
</script>

<style lang='scss' scoped>
@import './index.scss';
</style>
