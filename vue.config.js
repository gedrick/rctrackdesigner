module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/styles/index.scss";',
      },
    },
  },
  outputDir: './dist/',
  assetsDir: './assets/',
  indexPath: '../index.html',
  publicPath: '/rctrackdesigner/dist/',
};
