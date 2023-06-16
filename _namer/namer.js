const path = require("path");
module.exports = {
	rename: function (filePath, fileName, bundle, bundleGraph, config, options) {
		if (bundle.type == "css") return path.join(fileName);
		else if (bundle.type == "js") return path.join(fileName);
		else return null;
	},
};
