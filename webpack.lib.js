const path = require('path');
const webpack = require('webpack');
module.exports = {
    context: process.cwd(),
    entry: {
        library: [
            'react'
        ]
    },
    output: {
        filename: 'lib.dll.js',
        path: path.resolve(__dirname, './dist/client'),
        library: 'lib'
    },
    plugins: [
        new webpack.DllPlugin({
            name: 'lib',
            path: path.resolve(__dirname, './dist/client/lib.json')
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css'],
        modules: [__dirname, 'node_modules']
    }
};
