module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://backendrestapi-484g6.ondigitalocean.app',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    },
    headers: { "Access-Control-Allow-Origin": "*" },
    disableHostCheck: true,
    allowedHosts: ['.ondigitalocean.app']
  }
};
