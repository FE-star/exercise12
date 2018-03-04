
module.exports = function(src){
	const str = `
		define(function(module,src){
			${src}
		})
	` 
	return `export default ${str}`
}