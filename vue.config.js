module.exports = {
  devServer: { // 开发环境下，对于浏览器的esLint遮罩层的关闭
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      '/api': {
        target: 'https://m.maizuo.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  lintOnSave: false, // 直接关闭eslint检查规则关闭了
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        con: '@/components',
        views: '@/views'
      }
    }
  }
}
