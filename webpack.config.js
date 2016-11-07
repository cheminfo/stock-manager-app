'use strict';
const path = require('path');
const outDir = 'out';
const webpack = require('webpack');
const argv = require('minimist')(process.argv.slice(2));


const config = {
    entry: path.join(__dirname, './src', 'app.js'),
    output: {
        path: outDir,
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, './src'),
                ],
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.json$/,
                include: [path.resolve(__dirname, '../src')],
                loader: 'json'
            }
        ]
    },
    watch: argv.watch,
    plugins: []
};

if (!argv.debug) {
    config.plugins.unshift(new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
    }));
}

module.exports = config;