const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

let publicPath = '/';

const config = {
    mode:'development',
    output: {
        publicPath,
        filename: '[name].bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    cache: false,
    stats: {
        errorDetails: true,
    },
    entry: {
        main: [
            'babel-polyfill',
            './src/index',
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', 'scss'],
        modules: [path.resolve(__dirname, 'node_modules')],
    },
    optimization: {
        noEmitOnErrors: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [
                    /node_modules/,
                    '*.test.jsx',
                    '*.test.js',
                ],
                use: [
                    'babel-loader',
                ],
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.pug$/,
                use: [
                    { loader: 'raw-loader' },
                    {
                        loader: 'pug-html-loader',
                        options: {
                            data: {
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
            },
            {
                test: /\.(otf|woff|eot|ttf|mp3|png|svg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: `[name].asset.[ext]`,
                    },
                }],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.HashedModuleIdsPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.pug',
            favicon: './public/favicon.ico',
            chunksSortMode: 'none',
        }),
        new CopyWebpackPlugin([
            {
                from: 'favicon',
                to: path.resolve(__dirname, 'dist'),
            },
        ]),
        new MomentLocalesPlugin(),
    ],
};

module.exports = config;
