<template>
  <div class="login-container">
    <h2>🔐 Login</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      alert(`Logged in as: ${this.email}`);
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 10vh auto;
  padding: 2em;
  background: white;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}
.login-container input {
  width: 100%;
  margin-bottom: 1em;
  padding: 0.75em;
  font-size: 1em;
}
.login-container button {
  width: 100%;
  padding: 0.75em;
  background: #4CAF50;
  color: white;
  border: none;
  font-size: 1em;
  cursor: pointer;
  border-radius: 6px;
}
.login-container button:hover {
  background: #45a049;
}
</style>
