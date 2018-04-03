const Temp = {
	gridItem (icon, name, url) {
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
	}
}