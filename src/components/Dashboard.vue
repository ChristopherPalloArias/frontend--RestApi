<template>
  <div class="dashboard">
    <h1>Bienvenido al sistema</h1>
    <button @click="logout">Cerrar Sesión</button>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  methods: {
    logout() {
      // Eliminar el estado de autenticación de localStorage
      localStorage.removeItem('authenticated');
      this.$router.push({ name: 'login' });
    }
  }
};
</script>

<style scoped>
/* Agrega tus estilos aquí */
</style>
