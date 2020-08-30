<script >
	export default {

	}
</script>

<style lang ='scss'>
	@import './common/style/app.scss';
	page {  //uniapp 中的 page 标签相当于 html 中的 body, 默认高度为 auto, 但是高度为 100% 更利于 app 布局,你也可以在 page 中设置一些全局样式,比如全局背景色
		height: 100%;
		background: #FFFFFF;
		color: $app-main-text-color;
	}
</style>
