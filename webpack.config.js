const {resolve, join} = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    output: {
        path: resolve(__dirname, 'build')
    },
    devtool: '#source-map',
    devServer: {
        contentBase: join(__dirname, 'build'),
        compress: false,
        port: 8080,
        host: '127.0.0.1',
        hot: true,
        inline: true
    }
});
