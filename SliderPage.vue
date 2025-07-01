<template>
  <div class="slider-container">
    <header class="slider-header">
      <h1>🖼️ FrameShop Gallery</h1>
    </header>

    <div class="slider">
      <img :src="images[currentIndex]" alt="Frame" class="slider-image" />
      <div class="controls">
        <button @click="prevImage">‹</button>
        <button @click="nextImage">›</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliderPage',
  data() {
    return {
      currentIndex: 0,
      images: [
        'https://images.unsplash.com/photo-1600172454520-d88964c8c8cb?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1589987607627-f2f17e317c29?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1602511130433-28237689e8e4?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1589987845373-3285d27b9388?auto=format&fit=crop&w=800&q=80'
      ]
    };
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
  }
};
</script>
<style scooped>
.slider-container {
  font-family: 'Segoe UI', sans-serif;
  background: #f4f4f4;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.slider-header h1 {
  margin-bottom: 1.5em;
  font-size: 2em;
  color: #333;
}

.slider {
  position: relative;
  width: 500px; /* Fixed width */
  height: 500px; /* Fixed height */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  background: white;
}

.slider-image {
  width: 250%;
  height: 100%;
  object-fit: cover; /* Keeps aspect ratio and fills the box */
  transition: opacity 0.5s ease;
}

.controls {
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 1em;
  box-sizing: border-box;
}

.controls button {
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  padding: 0.5em 1em;
  font-size: 2em;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
}

.controls button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>