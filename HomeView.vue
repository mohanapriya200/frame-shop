<template>
  <div class="frameshop-bg">
    <h2 class="title"> Welcome to FrameShop</h2>
    <div class="horizontal-scroll">
      <div class="frame-wrapper" v-for="frame in frames" :key="frame.id">
        <FrameCard
          :frame="frame"
          @add-to-cart="handleAddToCart"
          @order-frame="handleOrderNow"
        />
      </div>
    </div>

    <div class="scroll-hint">← Swipe or Scroll →</div>
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
        { id: 1, name: 'Acrylic frame', price: 1200, image: require('@/assets/a1.jpg') },
        { id: 2, name: 'Metal frame', price: 1500, image:require('@/assets/a2.jpg') },
        { id: 3, name: 'Wooden frame', price: 2200, image: require('@/assets/a3.jpg') },
        { id: 4, name: 'Collage frame', price: 1750, image: require('@/assets/a4.jpg') },
        { id: 5, name: 'Mirror frame', price: 1750, image: require('@/assets/a5.jpg')  },
        { id: 6, name: 'Plastic frame', price: 1400, image: require('@/assets/a6.jpg') },
        { id: 7, name: 'Poster frame', price: 1550, image: require('@/assets/a7.jpg') },
        { id: 8, name: 'Golden frame', price: 1650, image: require('@/assets/a8.jpg') },
        { id: 9, name: 'Tree frame', price: 2000, image: require('@/assets/a9.jpg') },
        { id: 10, name: 'Floating frame', price: 1850, image: require('@/assets/a10.jpg') }
      ]
    };
  },
  methods: {
    handleAddToCart(frame) {
      alert(`🛒 ${frame.name} added to cart! 🎉`);
    },
    handleOrderNow(frame) {
      this.$router.push({
        name: 'FeedbackPage',
        params: { selectedFrame: frame.name }
      });
    }
  }
};
</script>

<style scoped>
.frameshop-bg 
{
 
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

.frame-wrapper {
  scroll-snap-align: start;
  flex: 0 0 auto;
}

.scroll-hint {
  text-align: center;
  font-size: 1em;
  color: #eee;
  margin-top: 1.5em;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
}
</style>
