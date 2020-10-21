var fs = require('fs');
var path = require('path');


module.exports = {
	// Map of hooks
	hooks: {

		"finish" : function () {
			var pathFile = this.options.pluginsConfig && this.options.pluginsConfig.logo;
			var logo = path.join(process.cwd(), pathFile);
			var gitbookLogoPath = path.join(process.cwd(), '_book', 'gitbook', 'images', 'logo.png');
			if (pathFile && fs.existsSync(pathFile)){
				fs.createReadStream(logo).pipe(fs.createWriteStream(gitbookLogoPath));
			}
		}
	},

	// Map of new blocks
	blocks: {},

	// Map of new filters
	filters: {}
};
