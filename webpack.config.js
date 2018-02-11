const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    home: './src/page/home/index',
    login: './src/page/login/index'
  },
  output: {
    filename: '[name].[chunkhash:8].js',
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    extensions: ['.ts','.tsx','.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['awesome-typescript-loader'],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader?minimize']
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        output: {
          comments: false,
          beautify: false
        },
      }
    }),
    new htmlWebpackPlugin({
      filename: 'home.html',
      template:'src/page/home/index.html',
      title:'home',
      chunks:['commons','manifest','home']
    }),
    new htmlWebpackPlugin({
      filename: 'login.html',
      template:'src/page/login/index.html',
      title:'login',
      chunks:['commons','manifest','login']
    }),
    new ExtractTextPlugin({
      filename: '[name]_[contenthash:8].css'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest"
    })
  ],
  devtool: 'source-map' // 输出 source-map 方便直接调试 ES6 源码
};
