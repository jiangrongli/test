const path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');

        
module.exports = {

    devServer: {
        contentBase: path.join(__dirname, './dist')
    },
    /*入口*/
    entry: {
        app: [
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.js')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
        // 'react-hot-loader/patch',
        // path.join(__dirname, 'src/index.js')


    // ],
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
        chunkFilename: '[name].js'
    },
    mode: 'development', // 设置mode
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192 //options limit 8192意思是，小于等于8K的图片会被转成base64编码，直接插入HTML中，减少HTTP请求。
                    }
                }]
            }
        ]
    },
    devServer: {
        port: 8056,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0',
        hot: true,  //热更新设置这里
    },
    resolve: {
        alias: {
            actions: path.join(__dirname, './src/redux/actions'),
            reducers: path.join(__dirname, './src/redux/reducers'),

        }
    },
    devtool: 'inline-source-map',
    
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, './src/index.html')
        }),
        
        /*plugins*/
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ],
};