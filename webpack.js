'use strict';

const webpack = require('webpack');
const argv = require('minimist')(process.argv.slice(2));
const path = require('path');
const outDir = 'out';
buildApp();

console.log(argv);

function buildApp() {
    const entries = [
        {file: 'app.js'}
    ];


    for (let entry of entries) {
        let config = {
            entry: path.join(__dirname, './src', entry.file),
            output: {
                path: outDir,
                filename: entry.file
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
            watch: argv.watch
        };

        if (!argv.debug) {
            config.plugins.unshift(new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"production"'
            }));
        }

        webpack(config, function (err, stats) {
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
                console.log('Build of ' + entry.file + ' successful');
            }
        });
    }
}

function printErrors(errors) {
    errors.forEach(function (error) {
        console.error(error);
    });
}