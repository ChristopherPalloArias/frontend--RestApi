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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  font-family: Arial, sans-serif;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
}

.dashboard {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.dashboard-container {
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 400px;
}

.dashboard-container h1 {
  margin-bottom: 1.5rem;
}

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
