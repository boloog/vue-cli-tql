const pageMethod = require('./multiPagesConfig')
const pagesAll = pageMethod.Confing()
let pages = {}

console.log(process.argv)

const projectname = process.argv[3] // 获取build后面的参数确定执行哪个文件
if (process.env.NODE_ENV === 'development') {
  // 判断开发环境不用
  pages = pagesAll
} else {
  // 假如命令npm run build-home, 就会得到 projectname = home
  pages[projectname] = pagesAll[projectname]
}

module.exports = {
  publicPath: './',
  outputDir: `dist/${projectname}`,
  pages,
  // 以下是做代理
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.douban.com/v2/movie/',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
