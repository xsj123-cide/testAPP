<template>
	<view class="wode">
		<index-tou></index-tou>
		<view class="contenta">
			<!-- 导航 -->
			<index-daohang></index-daohang> 
			<!-- 信息 -->
			<view class="wode_info">
				<view class="indo_item" v-for="(item,index) in msList"  :key="index">
					<view>
						<image :src="item.icon"></image>
						<view class="item_textOne">{{item.name}}</view>
					</view>
					<view>
						<view class="item_right">
							{{item.content}}
						</view>
						<view class="item_right_icon">
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import indexDaohang from "components/index/index-daohang.vue";
	import indexTou from "components/index/index-tou.vue";
	export default {
		components: {
			indexTou,
			indexDaohang
		},
		data() {
			return {
				msList: [
					{
						icon:'/static/icon/wode/dianp.png',
						name:'店铺简称',
						content:'厦门有家装饰',
					},
					{
						icon:'/static/icon/wode/com.png',
						name:'公司全称',
						content:'厦门有家装饰工程公司',
					},
					{
						icon:'/static/icon/wode/login.png',
						name:'登陆账号',
						content:'135******858',
					},
					{
						icon:'/static/icon/wode/admin.png',
						name:'管理员',
						content:'陈明法',
					},
					{
						icon:'/static/icon/wode/yijian.png',
						name:'意见反馈',
						content:'',
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
@import './wode.scss';
</style>
