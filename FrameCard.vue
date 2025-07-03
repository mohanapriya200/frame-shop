<template>
  <div class="frame-card">
    <img :src="frame.image" :alt="frame.name" />
    <h3>{{ frame.name }}</h3>
    <p>₹{{ frame.price }}</p>
    <div class="actions">
      <button @click="addToCart">🛒 Add to Cart</button>
      <button @click="orderNow">📦 Order Now</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FrameCard',
  props: {
    frame: Object
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.frame);
    },
    orderNow() {
      this.$emit('order-frame', this.frame);
    }
  }
};
</script>

<style scoped>
.frame-card {
  min-width: 240px;
  background: white;
  color: #333;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.2);
  scroll-snap-align: start;
  transition: transform 0.3s ease;
}

.frame-card:hover {
  transform: scale(1.05);
}

.frame-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.frame-card h3 {
  font-size: 1.1em;
  margin: 0.5em 0 0.2em;
}

.frame-card p {
  margin: 0;
  font-weight: bold;
}

.actions {
  display: flex;
  justify-content: space-around;
  margin: 1em 0;
}

.actions button {
  background: #333;
  color: white;
  padding: 0.4em 1em;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
  font-size: 0.95em;
}

.actions button:hover {
  background: #555;
}
</style>
