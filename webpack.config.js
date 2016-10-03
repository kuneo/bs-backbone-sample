var webpack = require('webpack');
var path = require('path');
var jsPath = path.resolve(__dirname, 'src/main/webapp/js');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'build');

module.exports = {
    context: path.resolve(__dirname, 'src/main/webapp/'),
    devtool: 'inline-source-map',
    entry: {
        bs: 'Application.js',
    },
    output: {
        path: buildPath,
        filename: '[name].js',
        publicPath: 'build/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: [nodeModulesPath]
            },
            {
                test: /\.json$/,
                loader: 'json',
                exclude: [nodeModulesPath]
            },
            {
                test: /\.hbs/,
                loader: 'handlebars'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                test: /bootstrap-sass\/assets\/javascripts\//,
                loader: 'imports?jQuery=jquery'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass?outputStyle=expanded'
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=application/font-woff'
                },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=application/font-woff'
                },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=application/octet-stream'
                },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
                },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=image/svg+xml'
                }
            ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            _: 'lodash',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Bn: 'backbone',
            Mn: 'backbone.marionette'
        }),
        function() {
            this.plugin('watch-run', function(watching, callback) {
                console.log('\033[36m[Begin compile at ' + new Date() + '] \033[39m');
                callback();
            });
        }
    ],
    resolve: {
        root: [
            jsPath,
            nodeModulesPath
        ],
        extensions: ['', '.js', '.css', '.hbs']
    }
};
