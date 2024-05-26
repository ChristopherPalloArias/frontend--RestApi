<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      error: null
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch('https://backendrestapi-484g6.ondigitalocean.app/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password
          })
        });
        if (!response.ok) {
          throw new Error('Login failed');
        }
        const data = await response.json();
        console.log(data);
        // Guardar el estado de autenticación en localStorage
        localStorage.setItem('authenticated', 'true');
        this.$router.push({ name: 'dashboard' });
      } catch (error) {
        this.error = error.message;
      }
    }
  }
};
</script>

<style scoped>
  
</style>
