const path = require('path');

module.exports = {
	mode: 'development',
	context: path.resolve('src'),
	entry: ['./app.js', './utils'],
	output: {
		path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
	module: {
		rules: [
			{
				test: [/\.js$/, /\.es6$/],
				exclude: /node_modules/,
				loader: "babel-loader"
			},
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
	},
	resolve: {
		extensions: ['.js', '.es6']
	}
}