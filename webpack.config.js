const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
	mode: "development",
	entry: path.resolve(__dirname, "./src/index.js"),
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, "dist"),
		},
		open: true,
		port: 3000,
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: "index.html",
			template: path.resolve(__dirname, "./src/template.html"),
			title: "Todo App"
		})
	],
	module: {
		rules: [
			{
				test: /\.scss/,
				use: ["style-loader", "css-loader", "sass-loader"]
			}
		]
	}
}
