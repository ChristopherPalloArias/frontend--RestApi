<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="username" type="text" placeholder="Username" required />
    <input v-model="password" type="password" placeholder="Password" required />
    <button type="submit">Login</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
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
          this.$router.push('/dashboard');
        } else {
          alert('Login failed');
        }
      } catch (error) {
        alert('Login failed: ' + error.message);
      }
    }
  }
};
</script>

<style scoped>
/* Your styles here */
</style>
