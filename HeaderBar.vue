<template>
  <header class="header">
    <div class="logo">🖼️ FrameShop</div>
    <nav class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/shop">Shop</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/signup">SignUp</router-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  background-color: #333;
  color: white;
}

.logo {
  font-size: 1.5em;
  font-weight: bold;
}

.nav-links a {
  color: white;
  margin-left: 1em;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.nav-links a:hover {
  transform: scale(1.1);
  color: #ffc107;
}
</style>
