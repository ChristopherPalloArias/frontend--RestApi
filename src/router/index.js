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

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Si la ruta requiere autenticación y no está autenticado, redirige al login
    if (!authenticated) {
      next({ name: 'login' });
    } else {
      next();
    }
  } else {
    // Si la ruta no requiere autenticación, continúa
    next();
  }
});

export default router;
