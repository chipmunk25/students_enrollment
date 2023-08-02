const path = require('path');
const webpack = require('webpack');
const mode = process.env.NODE_ENV || 'development';
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const Dotenv = require('dotenv-webpack');
module.exports = {
    entry: {
        enrollment: './src/client/enrollment/index.js',
    },
    mode,
    devtool: false,
    // devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, './dist/client'),
        filename: '[name]/bundle.js',
        chunkFilename: 'vendors/[name].[contenthash].js'
    },
    target: 'web',
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        cacheCompression: false
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(png|jp(e*)g|svg|gif|)$/,
                type: 'asset/resource',
                generator: {
                    filename: './imgs/[name][ext]'
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                type: 'asset/resource',
                generator: {
                    filename: './fonts/[name][ext]'
                }
            }
        ]
    },
    plugins: [
        // new Dotenv(),
        new webpack.ProvidePlugin({
            "React": "react",
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./dist/client/lib.json')
        }),
        new webpack.DefinePlugin({
            'window.SUB_DOMAIN_NAME': JSON.stringify(process.env.SUB_DOMAIN_NAME || '')
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser.js'
        }),
        new CompressionPlugin({
            test: /\.(js|css|html|svg)$/,
            threshold: 10240,
            minRatio: 0.8
        })
        // new SWPrecacheWebpackPlugin(config.preCache),
        // new WebpackPwaManifest(config.manifest)
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            react: path.resolve('./node_modules/react'),
            mainRoot: path.join(__dirname, 'dist/client/admin'),
            '@components': path.resolve(__dirname, 'src/client/components'),
            '@styles': path.resolve(__dirname, 'src/client/styles'),
            '@appQueryHooks': path.resolve(__dirname, 'src/client/appQueryHooks'),
            '@shared': path.resolve(__dirname, 'src/client/shared'),
            '@utils': path.resolve(__dirname, 'src/client/utils'),
            '@hooks': path.resolve(__dirname, 'src/client/hooks'),
            '@assets': path.resolve(__dirname, 'src/client/assets')
        }
    },

    optimization: {
        // minimize: true, //mode === 'development' ? false : true,
        minimizer: [new TerserPlugin()],
        splitChunks: {
            chunks: 'async',
            cacheGroups: {
                default: {
                    minChunks: 2,
                    reuseExistingChunk: true
                },
                vendor_react: {
                    test: /.*\/node_modules\/react\/index\.js/,
                    name: 'vendor-react',
                    chunks: 'initial',
                    enforce: true
                }
            }
        }
    }
};