//改文件用于修改默认配置 组件按需加载，样式
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  //针对antd实现按需打包，根据import来打包(使用babel-plugin-import)
  fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      // style: 'css',//自动打包相关css样式
      style:true,
  }),
  // 定制主题
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' }
  }),
  
);