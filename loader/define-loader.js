module.exports=function(source){
	if(this.request.indexOf('webpack/buildin/global.js') > -1){
        return source
    } else {
        return `global.define(function (module, exports) {
           ${source}
        })`
    }

}