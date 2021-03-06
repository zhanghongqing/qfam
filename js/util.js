var util = {
	options: {
		ACTIVE_COLOR: "#007aff",
		NORMAL_COLOR: "#666",
		subpages: ["html/manage.html", "html/look.html", "html/mine.html"]
	},
	/**
	 *  简单封装了绘制原生view控件的方法
	 *  绘制内容支持font（文本，字体图标）,图片img , 矩形区域rect
	 */
	drawNative: function(id, styles, tags) {
		var view = new plus.nativeObj.View(id, styles, tags);
		return view;
	},
	/**
	 * 初始化首个tab窗口 和 创建子webview窗口 
	 */
	initSubpage: function(aniShow) {
		var subpage_style = {
				top: 0,
				bottom: 51
			},
			subpages = util.options.subpages,
			self = plus.webview.currentWebview(),
			temp = {};

		//兼容安卓上添加titleNView 和 设置沉浸式模式会遮盖子webview内容
		if(mui.os.android) {
			if(plus.navigator.isImmersedStatusbar()) {
				subpage_style.top += plus.navigator.getStatusbarHeight();
			}
			if(self.getTitleNView()) {
				subpage_style.top += 40;
			}

		}

		// 初始化第一个tab项为首次显示
		temp[self.id] = "true";
		mui.extend(aniShow, temp);
		// 初始化绘制首个tab按钮
		util.toggleNview(0);

		for(var i = 0, len = subpages.length; i < len; i++) {

			if(!plus.webview.getWebviewById(subpages[i])) {
				var sub = plus.webview.create(subpages[i], subpages[i], subpage_style);
				//初始化隐藏
				sub.hide();
				// append到当前父webview
				self.append(sub);
			}
		}
	},
	/**	
	 * 点击切换tab窗口 
	 */
	changeSubpage: function(targetPage, activePage, aniShow) {
		//若为iOS平台或非首次显示，则直接显示
		if(mui.os.ios || aniShow[targetPage]) {
			plus.webview.show(targetPage);
		} else {
			//否则，使用fade-in动画，且保存变量
			var temp = {};
			temp[targetPage] = "true";
			mui.extend(aniShow, temp);
			plus.webview.show(targetPage, "fade-in", 300);
		}
		//隐藏当前 除了第一个父窗口
		if(activePage !== plus.webview.getLaunchWebview()) {
			plus.webview.hide(activePage);
		}
	},
	/**
	 * 点击重绘底部tab （view控件）
	 */
	toggleNview: function(currIndex) {
		currIndex = currIndex * 2;
		// 重绘当前tag 包括icon和text，所以执行两个重绘操作
		util.updateSubNView(currIndex, util.options.ACTIVE_COLOR);
		util.updateSubNView(currIndex + 1, util.options.ACTIVE_COLOR);
		// 重绘兄弟tag 反之排除当前点击的icon和text
		for(var i = 0; i < 8; i++) {
			if(i !== currIndex && i !== currIndex + 1) {
				util.updateSubNView(i, util.options.NORMAL_COLOR);
			}
		}
	},
	/*
	 * 改变颜色
	 */
	changeColor: function(obj, color) {
		obj.color = color;
		return obj;
	},
	/*
	 * 利用 plus.nativeObj.View 提供的 drawText 方法更新 view 控件
	 */
	updateSubNView: function(currIndex, color) {
		var self = plus.webview.currentWebview(),
			nviewEvent = plus.nativeObj.View.getViewById("tabBar"), // 获取nview控件对象
			nviewObj = self.getStyle().subNViews[0], // 获取nview对象的属性
			currTag = nviewObj.tags[currIndex]; // 获取当前需重绘的tag

		nviewEvent.drawText(currTag.text, currTag.position, util.changeColor(currTag.textStyles, color), currTag.id);
	},
	/*
	 * ajax
	 */
	getData: function(mod, param, success, error) {
		$.ajax({
			type: "get",
			data: param,
			url: "http://www.qiangfen.com/koa/" + mod,
			dataType: 'json',
			success: success,
			error: error
		})
	},
	getYYData: function (url, param, success, error) {
		$.ajax({
			type: "post",
			data: {
		        "showapi_timestamp": formatterDateTime(),
		        "showapi_appid": 61038, //这里需要改成自己的appid
		        "showapi_sign": 'b2c343cd1f6647e5832e35196698433c',  //这里需要改成自己的应用的密钥secret
		        "page":"1",
		        "maxResult":"10"
        	},
			url: url,
			dataType: 'json',
			success: success,
			error: error
		})
	},
	/*
	 * query
	 */
	getQueryString: function (name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", 'i'); // 匹配目标参数
		var result = window.location.search.substr(1).match(reg); // 对querystring匹配目标参数
		if(result != null) {
			return decodeURIComponent(result[2]);
		} else {
			return null;
		}
	},
	/*
	 * Storage
	 */
	save: function (key, val) {
		sessionStorage.setItem(key, val)
	},
	getSave: function (key) {
		return sessionStorage.getItem(key)
	},
	deleteSave: function (key) {
		return sessionStorage.removeItem(key)
	},
	/*
	 * page
	 */
	initPage: function(el, total, count, curPage, cb) {
		var pages = Math.ceil(total / count)
		var min,max;
		if (pages <= 5) {
			min = 1;
			max = pages
		} else {
			if (curPage - 2 < 1) {
				min = 1
				max = 5
			} else if (Number(curPage) + 2 > pages) {
				min = pages - 4
				max = pages
			} else {
				min = curPage - 2
				max = Number(curPage) + 2
			}
		}
		$(el).empty()
//		$(el).append('<li class="mui-disabled"><span> &laquo; </span></li>')
		if (min > 2) {
			$(el).append('<li class="page" data-page="1"><a href="#">1</a></li>')
			$(el).append('<li class="mui-disabled"><span> ... </span></li>')
		}
		for(let i = min; i <= max; i++) {
			if(curPage == i) {
				$(el).append('<li class="mui-active"><a href="#">' + i + '</a></li>')
				continue
			}
			$(el).append('<li class="page" data-page="' + i + '"><a href="#">' + i + '</a></li>')
		}
		if (max < pages - 1) {
			$(el).append('<li class="mui-disabled"><span> ... </span></li>')
			$(el).append('<li class="page" data-page="'+pages+'"><a href="#">'+pages+'</a></li>')
		}
//		$(el).append('<li><a> &raquo; </a></li>')
		$(el).one('click', '.page', function() {
			cb && cb($(this).attr('data-page'))
		})

	}
};

function formatterDateTime() {
  var date=new Date()
  var month=date.getMonth() + 1
        var datetime = date.getFullYear()
                + ""// "年"
                + (month >= 10 ? month : "0"+ month)
                + ""// "月"
                + (date.getDate() < 10 ? "0" + date.getDate() : date
                        .getDate())
                + ""
                + (date.getHours() < 10 ? "0" + date.getHours() : date
                        .getHours())
                + ""
                + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
                        .getMinutes())
                + ""
                + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
                        .getSeconds());
        return datetime;
    }