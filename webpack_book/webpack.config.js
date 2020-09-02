const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    // path需要绝对路径，node模块提供了一个 动态获取绝对路径的方法
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
}