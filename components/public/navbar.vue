<template>
<view class="nav-bar">
    <view class="tabbar_border"></view>
    <view class="tabbar_item" v-for="(item,index) in tabList" :key="index" @tap="changeUrl(item.url)">
        <view class="tabbar__bd">
            <image v-if="currenIndexa != index" :src="item.img" />
             <image v-if="currenIndexa == index" :src="item.activeimg" />
            <view :class="currenIndexa == index? 'tabbar__label red':'tabbar__label'" >{{item.text}}</view>
        </view>
    </view>
</view>
</template>
<script>
    export default {
        props: {
			currenIndexa:String
		},
        data() {
			return {
                // currenIndex:0,
                tabList : [
                    {
                        url:'/pages/index/index/index',
                        img :'/static/icon/index/tabbar/taocan.png',
                        activeimg:'/static/icon/index/tabbar/taocan_active.png',
                        text:'首页'
                    },
                    {
                        url:'/pages/sjcenter/sjcenter',
                        img :'/static/icon/index/tabbar/taocan.png',
                        activeimg:'/static/icon/index/tabbar/taocan_active.png',
                        text:'商机中心'
                    },
                    {
                        url:'/pages/msCenter/msCenter',
                        img :'/static/icon/index/tabbar/order.png',
                        activeimg:'/static/icon/index/tabbar/order_active.png',
                        text:'信息'
                    },
                    {
                        url:'/pages/mine/wode/wode',
                        img :'/static/icon/index/tabbar/mine.png',
                        activeimg:'/static/icon/index/tabbar/mine_active.png',
                        text:'我'
                    }
                ]            
            }
        },
        methods: {
            changeUrl(url) {
                uni.switchTab({
                    url
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
.nav-bar {
    bottom:  0;
	left: 0;
	z-index: 2;
	width: 100%;
	@include flex();
	position: fixed;
	font-size: 40rpx;
	background-color: white;
	box-sizing: border-box;
	height: 49px;
}
.nav-bar .tabbar_item {
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    font-size: 0;
    text-align: center;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.tabbar_border {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1rpx;
    -webkit-transform: scaleY(.5);
    background-color: rgba(0, 0, 0, 0.33);
    transform: scaleY(.5);
}
.tabbar_item {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal; 
}

.nav-bar .tabbar__bd, .nav-bar .tabbar_item {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
}

.tabbar__bd {
        position: relative;
        height: 50px;
        -webkit-flex-direction: column;
        flex-direction: column;
        cursor: pointer;
        image {
            position: relative;
            display: inline-block;
            margin-top: 10rpx;
            width: 48rpx;
            height: 48rpx;
        }
        .tabbar__label {
            position: relative;
            text-align: center;
            font-size: 10px;
            line-height: 1.8;
            color: rgb(191, 191, 191); font-size: 10px;
            // color: rgb(216, 30, 6); font-size: 10px;
        }
        .red {
            color: rgb(216, 30, 6); font-size: 10px;
        }
    }
</style>