module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://backend-restapi-g5luf.ondigitalocean.app',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    },
    headers: { "Access-Control-Allow-Origin": "*" },
    disableHostCheck: true,
    allowedHosts: ['.ondigitalocean.app']
  }
};
