const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    mode: 'development',
    plugins: [
      new MiniCssExtractPlugin(),
      new CopyWebpackPlugin({
        patterns: [{ from: "./src/static"}],
      }),
    ],
    module: {
        rules: [
          {
            test: /\.scss$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
          },
        ],
    },
    optimization: {
      minimizer: [
        '...',
        new CssMinimizerPlugin(),
      ],
    },
}