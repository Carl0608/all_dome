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
    overlay: {
      warnings: false,
      errors: false
    },

  },


  lintOnSave: false


}