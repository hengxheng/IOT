const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
const config = require('config');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //extract-text-webpack-plugin does not play well with webpack 4
const nodeExternals = require('webpack-node-externals')
/*-------------------------------------------------*/

let plugins = [
    new webpack.LoaderOptionsPlugin({
        options: {
            postcss: [autoprefixer]
        }
    }),
    new HTMLWebpackPlugin({
        template: path.resolve(__dirname, 'index.html')
    }),
    new MiniCssExtractPlugin({
        filename: "style.css",
        chunkFilename: "style.css"
    }),
    new webpack.HotModuleReplacementPlugin(),
];

if( config.get('uglify') ) {
    plugins.push( new uglifyJsPlugin( {
        sourceMap: config.get('sourcemap')
    } ) );
}

/*-------------------------------------------------*/

module.exports = env => {
    const devMode = env.mode !== 'production';
    return {
        entry: './public/src/js/index.js',
        output: {
            library: 'UserList',
            libraryTarget: 'umd',
            libraryExport: 'default',
            path: path.resolve(__dirname+'/public/', 'dist'),
            filename: 'bundle.js',
            publicPath: config.get('publicPath')
        },
        externals: [nodeExternals()],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        //MiniCssExtractPlugin is used only on production builds without style-loader in the loaders chain, 
                        //especially if you want to have HMR in development.
                        devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 
                        'css-loader', 
                        'postcss-loader', 
                        'sass-loader'
                    ]
                },
                // image in css
                {
                    test: /\.(jpg|png|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'img/',
                            }
                        }
                    ]
                },
            ]
        },
        plugins: plugins
    };
} 