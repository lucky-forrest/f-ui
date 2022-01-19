/*
 * @Description  : 项目入口
 * @Author       : forrest
 * @Date         : 2022-01-19 13:46:22
 * @LastEditors  : forrest
 * @LastEditTime : 2022-01-19 17:40:35
 * @LastEditDesc :
 * @FilePath     : \f-ui\vue.config.js
 */
const path = require('path')
const resolve = (dir) => {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('examples'))
      .set('@pkg', resolve('packages'))

    const urlLoader = config.module.rule('images')
    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    urlLoader.uses.clear()
    // 添加要替换的 loader
    urlLoader
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 1024 * 1024 * 4, // 4M
        name: '[path][name].[ext]', // 利用[path]路径获取文件夹名称并设置文件名
        fallback: 'file-loader', // 当超过8192byte时，会回退使用file-loader
        context: resolve('./packages'), // 过滤掉[path]的相对路径
        publicPath: '/' // 采用根路径
      })

    config.module
      .rule('js')
      .include
      .add(resolve('./packages'))
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      }).end()
  }
}
