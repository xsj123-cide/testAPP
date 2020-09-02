<template>
	<view class="index-first">
		<view class="first-content">
			<p>商机中心</p>
			<view class="content-item">
				<view class="_item" v-for="(item,index) in itemList['0']" :key="index" @tap="toPath({url:'/pages/minesj/minesj'})">
					<image :src='item.url' />
					<p>{{item.name}}</p>
				</view>
			</view>
		</view>
		<view class="first-content">
			<p>我的店铺</p>
			<view class="content-item">
				<view class="_item" v-for="(item,index) in itemList['1']" :key="index">
					<image :src='item.url' />
					<p>{{item.name}}</p>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
export default {
    data() {
		return {
            		itemList:{
					'0':[
						{
							url:'/static/icon/index/itema.png',
							name:'新商机'
						},
						{
							url:'/static/icon/index/itemb.png',
							name:'跟进中'
						},
						{
							url:'/static/icon/index/itemc.png',
							name:'已成单'
						},
						{
							url:'/static/icon/index/giveup.png',
							name:'已放弃'
						}
						],
					'1':[
						{
							url:'/static/icon/index/iteme.png',
							name:'店铺管理'
						},
						{
							url:'/static/icon/index/dian_pin.png',
							name:'店铺评价'
						},
						{
							url:'/static/icon/index/dian-dong.png',
							name:'店铺动态'
						},
						{
							url:'/static/icon/index/help.png',
							name:'帮助中心'
						}
						]
				},
        }
    }
}
</script>
<style lang="scss" scoped>
    .contenta {
		padding: 0rpx 20rpx;
        p {
            font-weight: 700;
            font-size: 31rpx;
        }
    }
    .index-first {
		background-color: #fff;
		position: relative;
		z-index: 999;
        border-radius: 30rpx;
        margin-top: -60rpx;
        padding-top: 20rpx;
        .first-content {
            padding: 5rpx 40rpx;
            .content-item {
                @include flex(row ,space-around);
                height: 162rpx;
                ._item {
                    flex: 1;
                    @include flex(column);
                    align-items: center;
                    image {
                        height: 80rpx;
                        width: 74rpx;
                    }
                    p {
                        color: grey;
                        font-weight: 400;
                        font-size: 27rpx;
                    }
                }
            }
        }
    }
</style>