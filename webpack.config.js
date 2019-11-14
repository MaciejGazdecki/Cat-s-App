const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: ['@babel/polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "js/bundle.js"
    },
    devServer: {
        contentBase: "./dist",
        port:3000,
        host:"0.0.0.0",
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebPackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            url:true
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: 'postcss.config.js'
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('node-sass'),
                            sourceMap: true,
                        }
                    }
                    ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[contenthash].[ext]',
                            outputPath:'images',
                        },
                    },
                ],
            }
        ]
    }
};