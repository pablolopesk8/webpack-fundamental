const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
  entry: ['./src/app.js', './src/utils'],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
	output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
	module: {
		rules: [
			{
				test: /\.es6$/,
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