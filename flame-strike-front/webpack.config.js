var webpack = require("webpack");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const glob = require("glob");
const htmlPluginArray = [];

function getEntry() {
    const entry = {};
    //读取src目录所有page入口
    glob.sync('./src/pages/*/index.jsx')
        .forEach(function (filePath) {
            var name = filePath.match(/\/pages\/(.+)\/index.jsx/);
            name = name[1];
            entry[name] = filePath;
            htmlPluginArray.push(new HtmlWebPackPlugin({
                filename: './' + name + '/index.html',
                template:'./src/template/index.html',
                chunks:[name]
            }))
        });
    entry['index'] = './src/index.jsx'
    htmlPluginArray.push(new HtmlWebPackPlugin({
        filename: './index.html',
        template:'./src/template/index.html',
        chunks:['index']
    }))
    return entry;
};


module.exports = {
    mode:'development',
    entry: getEntry(),
    output: {
        filename: '[name]/[name].[contenthash].js',
        chunkFilename: '[name]_[contenthash].min.js',
        path: path.resolve('./dist'),
        clean:true
    },
    resolve: {
        extensions: ['.js', '.jsx'],
      },
    devtool:'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
                include: path.resolve('./src'),
            },
            {
                test: /\.(a|c)ss$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: [ 'style-loader','css-loader',
                  {
                    loader: 'less-loader', // 编译 Less 为 CSS
                    options:{
                        lessOptions:{
                            modifyVars:{
                                'primary-color': '#c63520',
                                'link-color': '#c63520',
                                // 'success-color':'#c63520',
                                // 'warning-color':'#c63520',
                                // 'error-color':'#c63520',
                                // 'text-color':'#c63520',
                                // 'border-color-base':'#c63520',
                                // 'border-radius-base': '2px',
                            },
                            javascriptEnabled: true,
                        }
                    }
                  },
                ],
              },
            {
                test: /\.(gif|png|jpe?g|eot|woff|ttf|pdf|svg)$/,
                type: 'asset/resource'
              }
        ]
    },
    plugins: [
      ...htmlPluginArray
    ],
    devServer: {
        host: 'localhost',
        port: 3000,
        open: true,
        contentBase: './dist',
        inline:true,
        proxy: {
            '/': {
                target: 'http://localhost:8989',
                secure: true,
                changeOrigin: true
            }
        }
    }
}
