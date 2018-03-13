
module.exports = function(source) {
   if (~this.request.indexOf('webpack/buildin/global.js')) {// 给数字取反，-1会变0，其他都不会变0
   	return source;
   }else{
   	return `export default define(function(module,exports){
   		// 必须加上export default ,而且不能用global.define，只能是define
   		// 为什么？
  			${source}
  		})`
   }
  
};