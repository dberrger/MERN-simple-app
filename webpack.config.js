var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx','.scss'],
},
  module: {
    loaders: [
      {
      test: /(\.js|\.jsx)$/,
      loaders: ['react-hot-loader/webpack', 'babel'],
      include: path.join(__dirname, 'src')
    },
     {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?context=src/images&name=images/[path][name].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   loaders: ['file-loader?context=src/images&name=images/[path][name].[ext]', {
      //     loader: 'image-webpack-loader',
      //     query: {
      //       mozjpeg: {
      //         progressive: true,
      //       },
      //       gifsicle: {
      //         interlaced: false,
      //       },
      //       optipng: {
      //         optimizationLevel: 4,
      //       },
      //       pngquant: {
      //         quality: '75-90',
      //         speed: 3,
      //       },
      //     },
      //   }],
      //   exclude: /node_modules/,
      //   include: __dirname,
      // },
      {
        test: /\.css$/,
        loader: 'style!css'
      }, {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?/,
        loader: "file"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }
  ]
  }
};
