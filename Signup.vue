<template>
  <div class="signup-container">
    <form class="signup-form" @submit.prevent="handleSignup">
      <h2>📝 Create Your Account</h2>
      <input type="text" v-model="name" placeholder="Your Name" required />
      <input type="email" v-model="email" placeholder="Email Address" required />
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
      alert(`🎉 Welcome, ${this.name}! Your account has been created.`);
    }
  }
};
</script>

<style scoped>
.signup-container {
  height: 100vh;
  background: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1950&q=80') no-repeat center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeInBg 1s ease;
  font-family: 'Segoe UI', sans-serif;
}

.signup-form {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  padding: 2.5rem 2rem;
  border-radius: 16px;
  width: 330px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  animation: fadeScale 0.7s ease-out;
  transition: transform 0.3s;
}

.signup-form:hover {
  transform: scale(1.015);
}

.signup-form h2 {
  text-align: center;
  color: #fff;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-shadow: 1px 1px 4px #000;
}

.signup-form input {
  padding: 0.8em;
  border-radius: 8px;
  border: none;
  font-size: 1em;
  outline: none;
  transition: box-shadow 0.3s;
  background: rgba(255, 255, 255, 0.8);
  color: #333;
}

.signup-form input:focus {
  box-shadow: 0 0 8px #007bff;
}

.signup-form button {
  background: #007bff;
  color: white;
  padding: 0.8em;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s;
}

.signup-form button:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

@keyframes fadeInBg {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
