

module.exports = function (source) {
	console.log(this.request)
	return `
		global.define(function (module, exports) {
			${source}
		})
	`
}