const config = require('./webpack.config');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

config.plugins.push(
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HardSourceWebpackPlugin(),
);

config.devServer = {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    host: 'localhost',
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
};

config.devtool = 'source-map';

config.output.filename = '[name].bundle.[hash].js';

module.exports = config;
