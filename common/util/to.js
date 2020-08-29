const tabbar = [
    '/',
    'pages/index-index/index-index',
    'pages/index-data/index-data',
    'pages/index-commu/index-commu',
    'pages/index-my/index-my'
]
import store from '../../store'

// let token = uni.getStorageSync('token');

// function checkLogin(){
//     if(token&&store.state.user){
//         return true
//     }else{
//         return false;
//     }
// }

// function toBeforeIntercept(info){
//     let isLogin = checkLogin();
//     console.log(isLogin);
//     if(!isLogin){
//         uni.showModal({
//             title:'提示',
//             content:"未登录,请先登录",
//             success:(res)=>{
//                 if (res.confirm) {
//                     uni.navigateTo({
//                         url:'/pages/newSign/signin'
//                     })
//                 } else if (res.cancel) {
//                     console.log('用户点击取消');
//                 }
//             }
//         })
//         return   isLogin
//     }
// }


export default {
    install(Vue) {
        
        Vue.prototype.back = function () {
            uni.navigateBack({
                delta: 1
            })
        }
        Vue.prototype.toPath = function (info) {

         
            // if(!toBeforeIntercept(info)){
            //     return 
            // }
             

            let url = '';
            if (typeof info === "string") {
                url = `/pages/${info}/${info}`
                if (tabbar.includes(url)) {
                    uni.switchTab({
                        url
                    })
                } else {
                    uni.navigateTo({
                        url: `/pages/${info}/${info}`
                    })
                }
            } else if (typeof info === 'object') {
                if (tabbar.includes(info.url)) {
                    uni.switchTab(info)
                } else {
                    uni.navigateTo(info)
                }
            }

        }

        Vue.prototype.toTab = function (info) {
            if (typeof info === "string") {
                uni.switchTab({
                    url: `/pages/${info}/${info}`
                })
            } else if (typeof info === "object") {
                uni.switchTab(info)
            }

        }
        Vue.prototype.toSearch = function (name) {
            uni.redirectTo({
                url: '/pages/search/detail?key=' + name
            })
        }
        Vue.prototype.product = function (id) {
            this.toPath({
                url: '/pages/product/product?id=' + id
            })
        }
        Vue.prototype.toProduct = function (id) {
            console.log('sdkfjlsjdflsjdfljk')
            Vue.prototype.product(id);
        }
        Vue.prototype.toOrderDetail = function (id) {
            this.toPath({
                url: '/pages/order/detail?id=' + id
            })
        }
        Vue.prototype.buyorder = function () { }
        Vue.prototype.toSignin=function(){
            Vue.prototype.toPath({url:'/pages/newSign/signin'})
        }
    }
}