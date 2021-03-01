const path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

        
module.exports = {

    /*入口*/
    entry: {
        app: [
            path.join(__dirname, 'src/index.js')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },

    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].js'

        // path: path.join(__dirname, './dist'),
        // filename: 'js/bundle.js'
    },

    // devServer: {
    //     contentBase: path.join(__dirname, './dist')
    // },


    mode: 'production', // 设置mode
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
    },

    resolve: {
        alias: {
            pages: path.join(__dirname, './src/pages'),
            component: path.join(__dirname, './src/component'),
            router: path.join(__dirname, './src/router'),
            actions: path.join(__dirname, './src/redux/actions'),
            reducers: path.join(__dirname, './src/redux/reducers')
        }
    },
    devtool: 'cheap-module-source-map',
    
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ],
};