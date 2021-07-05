var WebpackStrip = require('strip-loader');
var devConfig = require('./webpack.config.js');
var stripLoader = {
	test: [/\.js$/, /\.es6$/],
	exclude: /node_modules/,
	loader: WebpackStrip.loader('console.log', 'document.write')
};

devConfig.module.rules.push(stripLoader);

module.exports = devConfig;