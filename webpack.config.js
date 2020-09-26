const webpack = require('webpack');


var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
  mode: 'development',
  resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
          '@': path.resolve(__dirname, 'src/'),
      }
  },
  plugins: [new HtmlWebpackPlugin({
      template: './src/index.html'
  })],
  devServer: {
      historyApiFallback: true
  },
  externals: {
      // global app config object
      config: JSON.stringify({
          apiUrl: 'http://localhost:4000'
      })
  },
  entry: './src/index.js',
  module: {
    rules: [
      //...
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },{
            test: /\.jsx?$/,
            loader: 'babel-loader'
        }
        ],
      },
    ],
  },
};
