let data = [{
	title: '标题',
	children: [{
		title: '笑话',
		icon: '',
		url: '/html/look/joke.html'
	}, {
		title: '笑话',
		icon: '',
		url: '/html/look/joke.html'
	}, {
		title: '笑话',
		icon: '',
		url: '/html/look/joke.html'
	}]
}]

data.forEach(function (e, i) {
	$('.lookContainer').append(Temp.viewList(e.title))
	e.children.forEach(function (ele, index) {
		$('.lookContainer .mui-table-view').eq(i).append(Temp.viewItem(ele.title, ele.url))
	})
})
