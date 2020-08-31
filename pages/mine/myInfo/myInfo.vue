<template>
	<view class="myInfo">
		<custom-nav  :title="title" ref="ltm" @lTap="back" color center></custom-nav>
		<view class="mine-third">
			<view class="third-item">
				<view class="third-item-left">Logo</view>
				<view class="touxiang">
					<view class="image"></view>
					<view class="right"></view>
				</view>
			</view>
			<view class="third-item start"  v-for="(item,index) in itema" :key="index">
				<view class="third-item-left">{{item.name}}</view>
				<input v-if="item.type === 'input'" type="text" name="" id="" :placeholder="item.placeholder">
				<button v-if="item.type === 'file'"> 请上传</button>
			</view>
		</view>

		<!-- 保存按钮 -->
		<button class="save">保存</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'我的资料',
				itema: [
					{
						name:'姓名',
						placeholder:'姓名',
						type:'input'
					},
					{
						name:'公司',
						placeholder:"公司名称",
						type:'input'
					},
					{
						name:'地址',
						placeholder:'公司地址',
						type:'input'
					},
					{
						name:'营业执照',
						placeholder:'公司地址',
						type:'file'
					},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang='scss' scoped>
.myInfo {
	@include page();
}
.image {
		width:120rpx;
		height:120rpx;
		margin: 20rpx;
		background-color: rgb(212, 212, 212);
		border-radius: 100rpx;
}
.mine-third {
	margin-bottom: 60rpx;
	background-color: white;
	padding: 0 40rpx;
	font-size: $font-size-lg;	
}
.third-item {
		@include flex(row,space-between);
		padding: 30rpx 0rpx;
		border-top: solid rgba(192, 192, 192,0.9) 1rpx;
		.third-item-left {
			margin-right: 80rpx;
		}
		.right {
		height: 20rpx;
		width: 20rpx;
		transform: rotate(45deg);
		border-top: 1rpx solid $text-color-assist;
		border-right: 1rpx solid $text-color-assist;
		}
		&:first-child {
			border-top: 0rpx;
		}
	}
.touxiang {
	@include flex(row);
}
.start {
	@include flex(row,start);
}
.save {
	width: 90%;
	padding: 10rpx;
	color: white;
	margin-top: 60rpx;
	border-radius: 50rpx;
	margin: 0 auto;
	background-color: $app-base-color;
}
</style>
