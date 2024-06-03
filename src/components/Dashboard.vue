<template>
  <div class="dashboard">
    <div class="dashboard-container">
      <h1>Bienvenido al sistema</h1>
      <button @click="logout">Cerrar Sesión</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard', // Define el nombre del componente
  methods: {
    // Método para cerrar sesión
    logout() {
      // Eliminar el estado de autenticación de localStorage
      localStorage.removeItem('authenticated');
      // Redirigir al componente de login
      this.$router.push({ name: 'login' });
    }
  }
};
</script>

<style scoped>
/* Reset de márgenes y padding, aplicando box-sizing */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Estilos generales para html y body */
html, body {
  height: 100%;
  font-family: Arial, sans-serif;
}

/* Centrando el contenido */
body {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
}

/* Contenedor principal del dashboard */
.dashboard {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

/* Contenedor interno del dashboard */
.dashboard-container {
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 400px;
}

/* Estilos del encabezado del dashboard */
.dashboard-container h1 {
  margin-bottom: 1.5rem;
}

/* Estilos del botón de cerrar sesión */
button {
  padding: 0.5rem 1rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}
</style>
