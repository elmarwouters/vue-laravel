let webpack = require('webpack');
let path = require('path');

module.exports = {

    entry: {
        app: path.resolve(__dirname, 'resources/assets/js') + '/app.js'
    },

    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: '[name].js',
        publicPath: './public'
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },

    mode: 'development',

    optimization: {
        minimize: false,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\/]node_modules[\/]/,
                    chunks: 'all',
                    name: 'vendor',
                    enforce: true
                }
            }
        }
    },

    plugins: []

};

if (process.env.NODE_ENV === 'production') {
    module.exports.optimization.minimize = true;
    module.exports.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: 'production'
            }
        })
    );
}