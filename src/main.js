import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

// Desactiva el mensaje de producción de Vue. Esto es una buena práctica para evitar mensajes innecesarios en la consola.
Vue.config.productionTip = false;

// Configura la URL base de Axios para todas las solicitudes HTTP. Todas las solicitudes se harán a esta URL base.
axios.defaults.baseURL = 'https://backend-restapi-g5luf.ondigitalocean.app';

//integrando el enrutador, el componente principal y monta la aplicación en el elemento con id 'app'.
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
