import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login.vue';
import Dashboard from '@/components/Dashboard.vue';

Vue.use(Router); // Configura Vue para usar el enrutador

const router = new Router({
  mode: 'history', // Usa el modo de historial del navegador en lugar del modo hash
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: { requiresAuth: true } // Ruta que requiere autenticación
    }
  ]
});

// Guardia global de navegación para verificar la autenticación en las rutas protegidas
router.beforeEach((to, from, next) => {
  const authenticated = localStorage.getItem('authenticated'); // Verifica el estado de autenticación
  console.log('Navegando a:', to.name);
  console.log('Autenticado:', authenticated);

  if (to.matched.some(record => record.meta.requiresAuth)) { // Verifica si la ruta requiere autenticación
    if (!authenticated) { // Si no está autenticado, redirige al login
      console.log('No autenticado, redirigiendo a login');
      next({ name: 'login' });
    } else {
      next(); // Si está autenticado, permite el acceso a la ruta
    }
  } else {
    next(); // Si la ruta no requiere autenticación, permite el acceso
  }
});

export default router; // Exporta el enrutador configurado
