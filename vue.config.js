const webpack = require('webpack')

module.exports = {

  configureWebpack: {

    plugins: [

      new webpack.ProvidePlugin({

        $: "jquery",

        jQuery: "jquery",

        "windows.jQuery": "jquery"

      })

    ]

  },
  devServer: {
    proxy: {
      '/svga': {
        target: 'http://aifire.oss-cn-hangzhou.aliyuncs.com/data',
        changeOrigin: true,
        pathRewrite: {
          '/svga': '/svga'
        }
      }
    },
    overlay: {
      warnings: false,
      errors: false
    },

  },


  lintOnSave: false


}