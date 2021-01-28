
module.exports = {
  publicPath: './',
  assetsDir: "static",
  outputDir: 'dist',

  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}