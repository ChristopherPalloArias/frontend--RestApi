import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

Vue.config.productionTip = false;

axios.defaults.baseURL = 'https://backendrestapi-484g6.ondigitalocean.app';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
