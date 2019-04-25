const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
    	main: './js/index.js',
    },
    output: {
        chunkFilename: '[name].js',
        filename: '[name].js',
    },
	module: {
		rules: [
			{
				include: [path.resolve(__dirname, 'src')],
				loader: 'babel-loader',

				options: {
					plugins: ['syntax-dynamic-import'],

					presets: [
						[
							'@babel/preset-env',
							{
								modules: false
							}
						]
					]
				},

				test: /\.js$/
			},
			{
				test: /\.(less|css)$/,
				use: [
                    {
                        loader: "style-loader"
                    },
					{
						loader: 'css-loader',

						options: {
							sourceMap: true,
						}
					},
					{
						loader: 'less-loader',
					}
				]
			}
		]
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	}
};
