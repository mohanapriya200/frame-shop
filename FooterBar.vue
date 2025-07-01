<template>
  <section class="benefits-section">
    <h2 class="section-title">Why Our Customers Choose Us</h2>
    <div class="benefits-grid">
      <div class="benefit-card" v-for="(benefit, index) in benefits" :key="index">
        <div class="icon">{{ benefit.icon }}</div>
        <h3>{{ benefit.title }}</h3>
        <p>{{ benefit.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FooterBar',
  data() {
    return {
      benefits: [
        {
          title: 'Free Pan-India Shipping',
          description: 'Enjoy free delivery when you shop above a certain amount, anywhere in India.',
          icon: '🚚'
        },
        {
          title: '7-Day Easy Replacement',
          description: 'Quick, hassle-free replacement if anything goes wrong.',
          icon: '🔁'
        },
        {
          title: 'Premium Materials',
          description: 'Our frames are crafted using top-tier materials for long-lasting beauty.',
          icon: '🖼️'
        }
      ]
    };
  }
};
</script>

<style scoped>
.benefits-section {
  padding: 4em 1.5em;
  background: linear-gradient(to right, #fdfbfb, #ebedee);
  text-align: center;
  animation: slideIn 1s ease-out;
}

.section-title {
  font-size: 2.4em;
  margin-bottom: 2em;
  font-weight: 700;
  color: #222;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2em;
  max-width: 1000px;
  margin: 0 auto;
}

.benefit-card {
  background: white;
  padding: 2em;
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.benefit-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

.benefit-card .icon {
  font-size: 2.5em;
  margin-bottom: 1em;
}

.benefit-card h3 {
  font-size: 1.3em;
  color: #111;
  margin-bottom: 0.6em;
}

.benefit-card p {
  font-size: 1em;
  color: #555;
  line-height: 1.5;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

