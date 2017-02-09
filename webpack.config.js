/* eslint-disable */
var path = require('path'),
    PACKAGE = require('./package.json'),
    webpack = require('webpack'),
    moment = require('moment'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    childProcess = require('child_process'),
    COMMIT = childProcess.execSync('git rev-parse --short HEAD').toString();

var ENV = process.env.npm_lifecycle_event;

var config = {};

config.entry = {
    app: ['./src/'],
    style: './src/assets/sass/main.scss',
    vendor: [
        'ag-grid',
        'ag-grid-react',
        'immutable',
        'moment',
        'axios',
        'react',
        'react-dom',
        'react-redux',
        'react-router',
        'redux',
        'redux-thunk'
    ]
}

config.resolve = {
    extensions: ['.js', '.jsx']
};

config.output = {
    path: path.join(__dirname, 'dist/'),
    filename: '[name].[chunkHash].js',
    chunkFilename: '[chunkHash].js',
    publicPath: '/'
};

config.devtool = 'source-map';
config.plugins = [];

/* Generates index.html file and injects the bundle.js file into it */
config.plugins.push(new HtmlWebpackPlugin({
    template: './src/index.html'
}));

/* Generate global variables that can be used throughout the application */
var buildDate = JSON.stringify(moment().format('DD-MM-YYYY HH:mm'));

var globals = {
    __BUILD__: {
        VERSION: JSON.stringify(PACKAGE.version),
        COMMIT: JSON.stringify(COMMIT),
        DATE: buildDate
    }
};

/* Build enhancements for deployment */
if (ENV === 'build') {
    globals['process.env.NODE_ENV'] = '"production"';

    /* Minifies the code */
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        sourceMap: true
    }));

    config.plugins.push(new ExtractTextPlugin('[name].[chunkHash].css'));
}

config.plugins.push(new webpack.LoaderOptionsPlugin({
    options: {
        sassLoader: {
            includePaths: ['./src/assets/sass']
        }
    }
}));

config.plugins.push(new webpack.DefinePlugin(globals));
config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor', 'manifest']
}));

config.module = {
    rules: [{
            test: /\.jsx?$/,
            loader: 'eslint-loader',
            enforce: "pre",
            exclude: /node_modules/
        },
        {
            test: /\.html$/,
            loader: 'html-loader'
        }, {
            test: /\.css$/,
            loader: 'css-loader'
        }, {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        ENV === 'build' ? {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
                fallback: "style-loader",
                loader: "css-loader!sass-loader!postcss-loader"
            })
        } : {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
        },
        {
            test: /\.(svg|jpe?g|png|gif|ico)$/,
            loader: 'url-loader?limit=100000'
        },
        {
            test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            loader: 'file-loader',
            query: {
                name: '[hash].[ext]'
            }
        }
    ]
};

module.exports = config;