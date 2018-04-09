const Temp = {
	gridItem(icon, name, url) {
		return `
			<li class="mui-table-view-cell mui-media mui-col-xs-3 linkTo" data-url="${url}">
				<a href="#">
					<svg class="qficon" aria-hidden="true">
						<use xlink:href="${icon}"></use>
					</svg>
					<div class="mui-media-body">${name}</div>
				</a>
			</li>
		`
	},
	gridItemImage(img, name, url) {
		return `
			<li class="mui-table-view-cell mui-media mui-col-xs-3 linkTo" data-url="${url}">
				<a href="#">
					<img src="${img}">
					<div class="mui-media-body">${name}</div>
				</a>
			</li>
		`
	},
	gdlistItem(title) {
		return `
		<div class="gridItem">
			<div class="gridHeader">${title}</div>
			<ul class="mui-table-view mui-grid-view mui-grid-9"></ul>
		</div>`
	},
	cardItem (title, time, text) {
		return `
		<div class="mui-card">
			<div class="mui-card-header mui-card-media">
				<div class="mui-media-body">
					${title}
					<p>时间 ${time}</p>
				</div>
			</div>
			<div class="mui-card-content">${text}</div>
		</div>`
	},
	viewList (title) {
		return `
		<div class="lookItem">
			<div class="title">${title}</div>
			<ul class="mui-table-view"></ul>
		</div>
		`
	},
	viewItem (name, url) {
		return `
		<li class="mui-table-view-cell linkTo" data-url="${url}">
			<a class="mui-navigate-right">
				${name}
			</a>
		</li>`
	},
	slideb (href, image_url) {
		return `
		<div class="mui-slider-item mui-slider-item-duplicate">
			<a href="${href}">
				<img src="${image_url}">
			</a>
		</div>
		`
	},
	slideItem (href, image_url) {
		return `
		<div class="mui-slider-item">
			<a href="${href}">
				<img src="${image_url}">
			</a>
		</div>
		`
	},
	tableListHeader (name, url) {
		return `
		<li class="mui-table-view-cell">
			<a href="${url}" class="mui-navigate-right">
				${name}
				<span>更多</span>
			</a>
		</li>
		<li class="courseContainer">
			<ul class="mui-table-view"></ul>
		</li>
		`
	},
	tabListItem (item) {
		let tag = ''
		item.tags.forEach(function (e, i) {
			tag += `<div class="tag">${e}</div>`
		})
		return `
		<li class="mui-table-view-cell mui-media">
		    <a href="javascript:;">
			    <img class="mui-media-object mui-pull-right" src="${item.image_url}">
				<div class="mui-media-body">
					${item.name}
					<div class="tags">
						${tag}
					</div>
					<div class="price">${item.is_free == 1 ? '免费' : '¥' + item.current_price}</div>
				</div>
			</a>
		</li>
		`
	}
}