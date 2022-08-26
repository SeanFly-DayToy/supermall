const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false, //Eslint设置
  configureWebpack: {
    resolve: {
      alias: {//配置别名，修改后重新编译才能生效
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
})