<template>
	<view class="msDetail">
		<custom-nav  :title="title"  center ></custom-nav>
		<navbar currenIndexa='2'></navbar>
		<view class="article">
			<view class="title">
				<p>简欧风格装修效果图展示 简欧风格的特点</p>
				<p style="color:rgb(190, 190, 190)">系统消息    |   2020/08/30</p>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '信息中心'
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.msDetail {
	@include page();
  }
  .custom-nav {
	background-color: white;
	border-bottom: rgba(212, 212, 212,.8) solid 3rpx;
    /deep/ .center {
        span {
            color:black
        }
    }
		/deep/ .back {
		.cuIcon-back {
			border-top: 2px grey solid;
			border-left: 2px grey solid;
		}
	}  
	}
.article {
	padding: 30rpx 20rpx;
	.title {
		text-align: center;
		font-size: 26rpx;
		line-height: 47rpx;
		p:first-child{
			font-size: 33rpx;
			margin-bottom: 30rpx;
		}
	}
}
</style>
