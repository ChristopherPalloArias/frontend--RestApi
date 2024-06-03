import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login.vue';
import Dashboard from '@/components/Dashboard.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
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
      meta: { requiresAuth: true }
    }
  ]
});

// Guardia global de navegación
router.beforeEach((to, from, next) => {
  const authenticated = localStorage.getItem('authenticated');
  console.log('Navegando a:', to.name);
  console.log('Autenticado:', authenticated);

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!authenticated) {
      console.log('No autenticado, redirigiendo a login');
      next({ name: 'login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
