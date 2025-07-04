<template>
  <div class="frameshop-home">
    <div class="content-box">
      <h1> Welcome to FrameShop</h1>
      <p class="benefit-text">{{ benefits[currentIndex] }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FrameShopHome',
  data() {
    return {
      currentIndex: 0,
      benefits: [
        '✨ Handcrafted frames tailored to your space.',
        '🚚 Fast & free delivery all over India.',
        '🎨 Customize styles to suit your home decor.',
        '💸 Affordable pricing with great offers.',
        '⭐ Trusted by 10,000+ happy customers.'
      ],
      interval: null
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.benefits.length;
    }, 3000); // change every 3s
  },
  beforeUnmount() {
    clearInterval(this.interval);
  }
};
</script>

<style scoped>
.frameshop-home {
 background-image: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
}

.content-box {
  background: rgba(236, 232, 232, 0.75);
  backdrop-filter: blur(6px);
  padding: 2rem 3rem;
  border-radius: 20px;
  text-align: center;
  max-width: 800px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: fadeInUp 0.8s ease;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* ✨ Hover animation on the box */
.content-box:hover {
  transform: scale(1.03);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
}

/* 🔁 Benefit text transitions */
.benefit-text {
  font-size: 1.3rem;
  color: #333;
  min-height: 60px;
  transition: color 0.4s ease, text-shadow 0.4s ease;
}

/* 🌟 Hover effect on text */
.benefit-text:hover {
  color: #2c3e50;
  text-shadow: 0 0 10px rgba(44, 62, 80, 0.5);
}

/* 🧊 Entrance animation */
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

</style>

