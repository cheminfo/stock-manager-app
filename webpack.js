'use strict';

const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const argv = require('minimist')(process.argv.slice(2));

buildApp();


function buildApp() {
        webpack(webpackConfig, function (err, stats) {
            var jsonStats = stats.toJson();
            if (err) {
                throw err;
            } else if (jsonStats.errors.length > 0) {
                printErrors(jsonStats.errors);
                if (!argv.watch) {
                    throw Error('Could not build ' + entry.file);
                }
            } else if (jsonStats.warnings.length > 0) {
                printErrors(jsonStats.warnings);
            } else {
                console.log('Build of ' + webpackConfig.entry + ' successful');
            }
        });
}

function printErrors(errors) {
    errors.forEach(function (error) {
        console.error(error);
    });
}