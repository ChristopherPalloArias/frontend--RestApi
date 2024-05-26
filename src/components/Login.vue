<template>
  <div class="login">
    <h3>Login</h3>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
      <div v-if="error" class="error">{{ error }}</div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
data() {
  return {
    username: '',
    password: '',
    error: ''
  };
},
methods: {
  async handleSubmit() {
    try {
      const response = await axios.post('https://backendrestapi-484g6.ondigitalocean.app/login', { 
        username: this.username,
        password: this.password
      });
      if (response.data.message === 'Login Successfully') {
        this.$router.push('/dashboard');
      } else {
        this.error = 'Invalid username or password';
      }
    } catch (err) {
      this.error = 'An error occurred. Please try again.';
    }
  }
}
};
</script>

<style>
.login {
max-width: 300px;
margin: auto;
}
.error {
color: red;
}
</style>
