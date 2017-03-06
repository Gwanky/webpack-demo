const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const HtmlIndex = new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'index.html',
    inject: 'body'
})

const ExtractCSS = new ExtractTextPlugin({
    filename: 'css/vendor/common.css'
})

const ExtractSCSS = new ExtractTextPlugin({
    filename: 'css/app.css'
})

const config = {
    entry: {
        main: './src/app.js'
    },
    output: {
        filename: 'js/[name]-bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractCSS.extract({
                use: ['css-loader', 'postcss-loader']
            })
        },{
            test: /\.js$/,
            use: 'babel-loader'
        },{
            test: /\.scss/,
            // use: ['style-loader','css-loader','postcss-loader','sass-loader']
            use: ExtractSCSS.extract({
                use: ['css-loader','postcss-loader','sass-loader']
            })
        },{
            test: /\.html$/,
            use: 'html-loader'
        }]
    },
    plugins:[
        HtmlIndex,
        ExtractCSS,
        ExtractSCSS
    ]
}

module.exports = config
