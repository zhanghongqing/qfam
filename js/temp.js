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
	}
}