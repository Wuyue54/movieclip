const webpack = require('webpack');
const path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	entry:[
		'webpack-dev-server/client?http://127.0.0.1:8080/',
		'webpack/hot/only-dev-server',
		'./src/index.js'
	],
	output:{
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/public/'
	},
	resolve:{
		modulesDirectories:['node_modules','src'],
		extensions:[ '', '.js','map', '.jsx']
	},
	module:{
		loaders: [
			{
				test: /\.jsx?$/,
        		exclude: /(node_modules)/,
        		loaders: ['react-hot','babel']
			},
			{
	        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
	        loader: 'url-loader?limit=8192'
      }
		]
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
}
