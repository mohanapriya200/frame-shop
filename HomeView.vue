<template>
  <div class="frameshop-bg">
    <h2 class="title">🖼️ Welcome to FrameShop</h2>
    <div class="horizontal-scroll">
      <FrameCard
        v-for="frame in frames"
        :key="frame.id"
        :frame="frame"
        @add-to-cart="handleAddToCart"
        @order-frame="handleOrderNow"
      />
    </div>
  </div>
</template>

<script>
import FrameCard from '@/components/FrameCard.vue';

export default {
  name: 'HorizontalFrames',
  components: { FrameCard },
  data() {
    return {
      frames: [
        { id: 1, name: 'Classic Wood', price: 1200, image: 'https://images.unsplash.com/photo-1600172454520-d88964c8c8cb?auto=format&fit=crop&w=600&q=80' },
        { id: 2, name: 'Modern Black', price: 1500, image: 'https://images.unsplash.com/photo-1589987607627-f2f17e317c29?auto=format&fit=crop&w=600&q=80' },
        { id: 3, name: 'Golden Frame', price: 2200, image: 'https://images.unsplash.com/photo-1602511130433-28237689e8e4?auto=format&fit=crop&w=600&q=80' },
        { id: 4, name: 'Vintage Metal', price: 1750, image: 'https://images.unsplash.com/photo-1589987845373-3285d27b9388?auto=format&fit=crop&w=600&q=80' },
        { id: 5, name: 'Collage Frame', price: 1750, image: 'https://images.unsplash.com/photo-1599947180848-4f6aab58fccc?auto=format&fit=crop&w=600&q=80' },
        { id: 6, name: 'Plastic Frame', price: 1400, image: 'https://images.unsplash.com/photo-1578898888888-123456abcdef?auto=format&fit=crop&w=600&q=80' },
        { id: 7, name: 'Wood Frame', price: 1550, image: 'https://images.unsplash.com/photo-1557898673123-123456abcdef?auto=format&fit=crop&w=600&q=80' },
        { id: 8, name: 'Poster Frame', price: 1650, image: 'https://images.unsplash.com/photo-1504164996022-09080787b6b3?auto=format&fit=crop&w=600&q=80' },
        { id: 9, name: 'Mirror Frame', price: 2000, image: 'https://images.unsplash.com/photo-1515876304589-9b81d2c98789?auto=format&fit=crop&w=600&q=80' },
        { id: 10, name: 'Floating Frame', price: 1850, image: 'https://images.unsplash.com/photo-1508898578281-774ac4893a2d?auto=format&fit=crop&w=600&q=80' }
      ]
    };
  },
  methods: {
    handleAddToCart(frame) {
      alert(`🛒 Added to cart: ${frame.name} - ₹${frame.price}`);
    },
    handleOrderNow(frame) {
      alert(`📦 Order placed for: ${frame.name}`);
    }
  }
};
</script>

<style scoped>
.frameshop-bg {
  background-image: url('https://images.unsplash.com/photo-1587496679744-8528af5d3763?auto=format&fit=crop&w=1500&q=80');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding: 2em;
  color: #fff;
}

.title {
  font-size: 2em;
  text-align: center;
  margin-bottom: 1em;
  font-weight: bold;
  text-shadow: 2px 2px 4px #000;
}

.horizontal-scroll {
  display: flex;
  overflow-x: auto;
  gap: 1.5em;
  padding: 1em;
  scroll-snap-type: x mandatory;
}

.horizontal-scroll::-webkit-scrollbar {
  display: none;
}
</style>
