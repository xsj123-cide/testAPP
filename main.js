import Vue from 'vue'
import App from './App'
import $store from './store'
import to from './common/util/to'
Vue.use(to);
Vue.prototype.$store = $store // vuex
// Vue.prototype.$offset = function (selector) { // 获取元素宽高位置信息
// 	return new Promise((resolve, reject) => {
// 		uni.createSelectorQuery().in(this).select(selector).boundingClientRect(data => {
// 			data ? data.x = data.left + data.width / 2 : ''
// 			data ? data.y = data.top + data.height / 2 : ''
// 			data ? resolve(data) : reject('元素不存在')
// 		}).exec()
// 	})
// }

import CustomNav from './components/public/custom-nav.vue' //自定义头部导航栏交互组件
import NavBar from './components/public/navbar.vue' 
Vue.component('custom-nav', CustomNav) //注册自定义头部导航栏
Vue.component('navbar', NavBar) 

// import * as filters from '@/filters'
// Object.keys(filters).forEach(e => {
// 	Vue.filter(e, filters[e])
// })
Vue.config.productionTip = false;
App.mpType = 'app'

const app = new Vue({
    // store,
    ...App
})
app.$mount()

