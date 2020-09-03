const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    // path需要绝对路径，node模块提供了一个 动态获取绝对路径的方法
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader只负责将CSS文件进行加载
        // style-loader负责将样式添加在DOM中
        // 使用多个loader时，是从右向左
        // 安装loader注意版本过高可能不能正常运行，找对应适合的webpack版本
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}