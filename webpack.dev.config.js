const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    module: {
      rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader' },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            }
        ],
    },
    plugins: [
      new htmlWebpackPlugin({
        template: './index.html',
      }),
    ],
  }