const glob = require('glob')
const views = {}
module.exports.Confing = function () {
  glob.sync('./src/views/*/*.js').forEach(filepath => {
    const fileList = filepath.split('/')
    const fileName = fileList[fileList.length - 2]
    views[fileName] = {
      // page 的入口
      entry: `src/views/${fileName}/main.js`,
      // 模板来源
      template: `src/views/${fileName}/${fileName}.html`,
      // 在 dist/index.html 的输出
      filename: process.env.NODE_ENV === 'development' ? `${fileName}.html` : 'index.html',
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', fileName]
    }
  })
  return views
}
