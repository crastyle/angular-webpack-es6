var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.config');

config.output = {
    filename: '[name].bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'src')
};
config.module.loaders.push({
        test: /\.(gif|jpg|png)\??.*$/,
        loader: 'url-loader?limit=10000&name=[path][name].[ext]'
    }
)

config.plugins = config.plugins.concat([

    // Adds webpack HMR support. It act's like livereload,
    // reloading page after webpack rebuilt modules.
    // It also updates stylesheets and inline assets without page reloading.
    new webpack.HotModuleReplacementPlugin()
]);

module.exports = config;
