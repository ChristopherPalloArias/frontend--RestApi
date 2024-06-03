<template>
  <div class="login">
    <form @submit.prevent="handleSubmit" class="login-form">
      <h2>Iniciar Sesión</h2>
      <input v-model="username" type="text" placeholder="Nombre de usuario" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <button type="submit">Entrar</button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post('/login', {
          username: this.username,
          password: this.password
        });
        if (response.data.message === 'Login Successfully') {
          // Guardar estado de autenticación
          localStorage.setItem('authenticated', 'true');
          console.log('Autenticación exitosa, redirigiendo a dashboard');
          // Redirigir al dashboard
          this.$router.push('/dashboard');
        } else {
          this.errorMessage = 'Login failed';
          console.error('Login failed');
        }
      } catch (error) {
        this.errorMessage = 'Login failed';
        console.error('Login failed');
      }
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

.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

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

.login-form input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

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

.error {
  color: red;
  margin-top: 1rem;
}
</style>
