<template>
  <div class="auth-container">
    <form class="auth-form" @submit.prevent="handleSignup">
      <h2>📝 Sign Up</h2>
      <input type="text" v-model="name" placeholder="Name" required />
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignupPage',
  data() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },
  methods: {
    handleSignup() {
      alert(`✅ Signed up as ${this.name}`);
    }
  }
};
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  animation: fadeIn 0.8s ease;
}

.auth-form {
  background: white;
  padding: 2em;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.auth-form input {
  padding: 0.75em;
  font-size: 1em;
  border-radius: 6px;
  border: 1px solid #ccc;
}

.auth-form button {
  background: #007bff;
  color: white;
  padding: 0.75em;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.auth-form button:hover {
  background: #0056b3;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
