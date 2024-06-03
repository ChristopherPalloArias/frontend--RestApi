<template>
  <div class="login">
    <form @submit.prevent="handleSubmit" class="login-form">
      <h2>Login RestApi</h2>
      <input v-model="username" type="text" placeholder="Nombre de usuario" required autoComplete="username" />
      <input v-model="password" type="password" placeholder="Contraseña" required autoComplete="current-password" />
      <button type="submit">Login</button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
import axios from 'axios'; // Importa la biblioteca axios para hacer solicitudes HTTP

export default {
  name: 'Login',
  data() {
    return {
      username: '', // Almacena el nombre de usuario ingresado
      password: '', // Almacena la contraseña ingresada
      errorMessage: '' // Almacena mensajes de error para mostrar en la interfaz
    };
  },
  methods: {
    // Método para manejar el envío del formulario de inicio de sesión
    async handleSubmit() {
      try {
        // Realiza una solicitud POST al endpoint de login con los datos del usuario
        const response = await axios.post('/login', {
          username: this.username,
          password: this.password
        });
        // Verifica la respuesta del servidor
        if (response.data.message === 'Login Successfully') {
          // Guardar estado de autenticación en localStorage
          localStorage.setItem('authenticated', 'true');
          console.log('Autenticación exitosa, redirigiendo a dashboard');
          // Redirigir al componente Dashboard
          this.$router.push('/dashboard');
        } else {
          // Muestra mensaje de error si la autenticación falla
          this.errorMessage = 'Login failed';
          console.error('Login failed');
        }
      } catch (error) {
        // Manejo de errores en caso de fallo de la solicitud
        this.errorMessage = 'Login failed';
        console.error('Login failed');
      }
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

/* Contenedor principal de login */
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

/* Estilos del formulario de login */
.login-form {
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 300px;
}

.login-form h2 {
  margin-bottom: 1.5rem;
}

/* Estilos de los inputs del formulario */
.login-form input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Estilos del botón de login */
.login-form button {
  padding: 0.5rem 1rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login-form button:hover {
  background: #0056b3;
}

/* Estilos para mensajes de error */
.error {
  color: red;
  margin-top: 1rem;
}
</style>
