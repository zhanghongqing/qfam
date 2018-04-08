let data = [{
	title: '网页管理',
	children: [{
		icon: '#icon-guanggaopai',
		name: 'banner管理',
		url: 'none'
	}, {
		icon: '#icon-xinwenzuguanli',
		name: '资讯管理',
		url: 'none'
	}, {
		icon: '#icon-zhuantixuexihui',
		name: '资料管理',
		url: 'none'
	}, {
		icon: '#icon-drxx11',
		name: '导航管理',
		url: 'none'
	}, {
		icon: '#icon-icon_caidanpeizhi',
		name: '菜单管理',
		url: 'none'
	}, {
		icon: '#icon-shuji',
		name: '书籍管理',
		url: 'none'
	}]
}, {
	title: '课程管理',
	children: [{
		icon: '#icon-kecheng',
		name: '课程管理',
		url: 'none'
	}, {
		icon: '#icon-shaixuan1',
		name: '筛选课程',
		url: 'none'
	}, {
		icon: '#icon-kechengdingzhi',
		name: '创建课程',
		url: 'none'
	}]
}, {
	title: '图片管理',
	children: [{
		icon: '#icon-tupian1',
		name: '图片管理',
		url: 'none'
	}, {
		icon: '#icon-shangchuantupian',
		name: '上传图片',
		url: 'none'
	}]
}, {
	title: '用户管理',
	children: [{
		icon: '#icon-icon_yonghuguanli',
		name: '用户管理',
		url: 'none'
	}, {
		icon: '#icon-tubiao-',
		name: '用户查询',
		url: 'none'
	}, {
		icon: '#icon-yonghuqushi',
		name: '用户趋势',
		url: 'none'
	}]
}, {
	title: '订单管理',
	children: [{
		icon: '#icon-dingdanguanli',
		name: '订单管理',
		url: 'none'
	}, {
		icon: '#icon-tubiao',
		name: '订单统计',
		url: 'none'
	}, {
		icon: '#icon-shaixuan',
		name: '订单筛选',
		url: 'none'
	}, {
		icon: '#icon-dingdan',
		name: '订单列表',
		url: 'none'
	}, {
		icon: '#icon-dingdanchaxun',
		name: '订单查询',
		url: 'none'
	}]
}]

data.forEach(function (e, i) {
	$('.gridContainer').append(Temp.gdlistItem(e.title))
	e.children.forEach(function (ele, index) {
		$('.gridContainer .mui-table-view.mui-grid-view.mui-grid-9').eq(i).append(Temp.gridItem(ele.icon, ele.name, ele.url))
	})
})
