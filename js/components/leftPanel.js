let data = [{
	icon: '#icon-shouye',
	name: '显示资讯',
	url: 'html/news/show.html'
}, {
	icon: '#icon-shouye',
	name: '显示真题',
	url: 'html/test/show.html'
}, {
	icon: '#icon-shouye',
	name: '上传图片',
	url: 'html/image/upload.html'
}, {
	icon: '#icon-shouye',
	name: '首页',
	url: 'http://www.qiangfen.com'
}, {
	icon: '#icon-shouye',
	name: '首页',
	url: 'http://www.qiangfen.com'
}, {
	icon: '#icon-shouye',
	name: '首页',
	url: 'http://www.qiangfen.com'
}, {
	icon: '#icon-shouye',
	name: '首页',
	url: 'http://www.qiangfen.com'
}, {
	icon: '#icon-shouye',
	name: '首页',
	url: 'http://www.qiangfen.com'
}]

data.forEach(function (e, i) {
	$('.mui-table-view.mui-grid-view.mui-grid-9').append(Temp.gridItem(e.icon, e.name, e.url))
})
