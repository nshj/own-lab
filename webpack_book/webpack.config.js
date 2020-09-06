const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    // path需要绝对路径，node模块提供了一个 动态获取绝对路径的方法
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // 临时,因为index.html目前放在src文件夹中,最终还是会放在dist中
    // publicPath: 'dist/'
  },
  module: {
    rules: [
      // css配置
      {
        test: /\.css$/,
        // css-loader只负责将CSS文件进行加载
        // style-loader负责将样式添加在DOM中
        // 使用多个loader时，是从右向左
        // 安装loader注意版本过高可能不能正常运行，找对应适合的webpack版本 
        use: [ 'style-loader', 'css-loader' ]
      },
      // 图片文件配置
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 一般默认limit属性，当图片小于8kb时，对图片进行base64编码
              limit: 8192,
              // 当大于限制会通过 file-loader进行处理
              // 修改文件名称
              // 默认情况下.webpack会将生成的路径直接返回给使用者,需要用publicPath
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      // ES6 转ES5配置
      {
        test: /\.js$/,
        // 排除
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      // 配置Vue
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
        }
      }
    ]
  },
  resolve: {
    // alias别名，指定vue的可以编译带template的runtime-compiler
    alias: {
        'vue$': 'vue/dist/vue.esm.js' //内部为正则表达式  vue结尾的
    }
  },
  plugins: [
    new webpack.BannerPlugin('webpack自带的插件，为打包的文件添加版权声明'),
    new HtmlWebpackPlugin( {
      template: 'index.html'
    })
  ]
}