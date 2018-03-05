module.exports = function(source) {
	// windows系统，不一样的路径。。
	if(~this.request.indexOf('\\webpack\\buildin\\global.js')) {
		return source;
	} else {
		return `
			global.define(function(module, exports) {
				${source}
			})
		`
	}
}