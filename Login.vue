<template>
  <div class="login-wrapper">
    <div class="login-container">
      <h2>🔐 Welcome Back</h2>
      <form @submit.prevent="login" class="login-form">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
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
      alert(`✅ Logged in as: ${this.email}`);
    }
  }
};
</script>

<style scoped>
/* 🔄 Background Zoom Animation */
@keyframes bgZoom {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
}

/* 🔼 Form Fade In & Slide Up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 🌄 Background Setup */
.login-wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
  animation: bgZoom 10s ease-in-out infinite alternate;
  overflow: hidden;
}

/* 🧊 Glassmorphism Box */
.login-container {
  width: 100%;
  max-width: 400px;
  padding: 2.5em 2em;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  text-align: center;
  animation: fadeInUp 1s ease;
  color: #fff;
}

.login-container h2 {
  margin-bottom: 1.5em;
  font-weight: bold;
  font-size: 1.8rem;
}

/* 🧾 Inputs */
.login-form input {
  width: 100%;
  margin-bottom: 1em;
  padding: 0.8em;
  border: none;
  border-radius: 8px;
  font-size: 1em;
  transition: all 0.3s;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}

.login-form input::placeholder {
  color: #eee;
}

.login-form input:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 10px #4caf50;
}

/* 🔘 Button */
.login-form button {
  width: 100%;
  padding: 0.8em;
  background-color: #4CAF50;
  color: white;
  border: none;
  font-size: 1em;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.4s, transform 0.2s;
}

.login-form button:hover {
  background-color: #43a047;
  transform: scale(1.05);
}
</style>
