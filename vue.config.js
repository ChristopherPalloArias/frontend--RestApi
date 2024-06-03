module.exports = {
  devServer: {
    proxy: {
      '/api': {
        // Redirige las solicitudes con prefijo '/api' al servidor backend
        target: 'https://backend-restapi-g5luf.ondigitalocean.app',
        changeOrigin: true, // Cambia el origen de la solicitud al destino del proxy
        pathRewrite: { '^/api': '' } // Elimina el prefijo '/api' de la ruta antes de redirigir
      }
    },
    // Añade encabezados a todas las respuestas del servidor de desarrollo
    headers: { "Access-Control-Allow-Origin": "*" }, // Permite que cualquier origen acceda a los recursos (CORS)
    disableHostCheck: true, // Desactiva la comprobación de host, útil en entornos de desarrollo
    allowedHosts: ['.ondigitalocean.app'] // Permite el acceso solo desde subdominios de 'ondigitalocean.app'
  }
};
