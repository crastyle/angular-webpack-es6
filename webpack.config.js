var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval',
    entry: {},
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [/app\/lib/, /node_modules/, /bower_components/],
                loader: 'ng-annotate!babel'
            },
            {test: /\.html/, loader: 'raw'},
            {test: /\.jade$/, loader: 'jade'},
            {test: /\.scss$/, loader: 'style!css!sass'},
            {test: /\.css$/, loader: 'style!css'},
            // {test: /\.css$/, loader: 'style!css'},
            {test: /\.(woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=10000&name=library/fonts/[name].[ext]'}
        ]
    },
    resolve: {
        extensions: ['', '.js'],
        alias: {
            ionic: path.resolve(__dirname, 'bower_components/ionic/release/js'),
            ng: path.resolve(__dirname, 'bower_components/angular/angular.min'),
            ngAnimate: path.resolve(__dirname, 'bower_components/angular-animate/angular-animate.min'),
            ngSanitize: path.resolve(__dirname, 'bower_components/angular-sanitize/angular-sanitize.min'),
            uiRouter: path.resolve(__dirname, 'bower_components/angular-ui-router/release/angular-ui-router.min'),
            cropper:path.resolve(__dirname,'bower_components/angular-img-cropper/dist/angular-img-cropper.min'),
            library: path.resolve(__dirname, 'src/assets/dep'),
            sass: path.resolve(__dirname, 'src/styles'),
            img: path.join(__dirname, 'src/assets/img'),
            assets:path.join(__dirname, 'src/assets/')
        }
    },
    plugins: [
        // Injects bundles in your index.html instead of wiring all manually.
        // It also adds hash to all injected assets so we don't have problems
        // with cache purging during deployment.
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body',
            hash: true
        }),

        // Automatically move all modules defined outside of application directory to vendor bundle.
        // If you are using more complicated project structure, consider to specify common chunks manually.
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module, count) {
                return module.resource && module.resource.indexOf(path.resolve(__dirname, 'src')) === - 1;
            }
        })
    ]
};
