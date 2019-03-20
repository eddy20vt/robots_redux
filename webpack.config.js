const webpack = require('webpack')
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const ASSET_PATH = process.env.ASSET_PATH || '/'

module.exports = {
    entry: {
        stylesheet: path.resolve('./src', 'style.scss'),
        main: path.resolve('./src', 'index.js')
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    fix: true
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new webpack.DefinePlugin({
            'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
        })
    ],
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components/'),
            modules: path.resolve(__dirname, 'src/modules/'),
            containers: path.resolve(__dirname, 'src/containers/'),
            api: path.resolve(__dirname, 'src/api/'),
            sagas: path.resolve(__dirname, 'src/sagas/'),
        }
    },
    output: {
        publicPath: ASSET_PATH
    }
}
