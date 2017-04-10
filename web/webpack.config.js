var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const extractScss = new ExtractTextPlugin({
    filename: '[name].[contenthash].css'
});

module.exports = {
    entry: './app.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: [ 'env' ]
                }
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader',
                query: {
                    partialDirs: [
                        path.join(__dirname, 'src', 'templates')
                    ]
                }
            },
            {
                test: /\.scss$/,
                use: extractScss.extract(["css-loader", "sass-loader"])
            }
        ]
    },
    plugins: [
        extractScss,
        new HtmlWebpackPlugin({
            title: 'Ben Naylor',
            template: path.join(__dirname, 'index.html')
        })
    ]
};
