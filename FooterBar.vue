<template>
  <section class="carousel-section">
    <h2 class="carousel-title">💬 What Our Customers Say</h2>

    <div class="carousel-wrapper">
      <transition-group name="carousel" tag="div" class="carousel-track">
        <div
          class="carousel-slide"
          v-for="(review, index) in visibleSlides"
          :key="review.name"
        >
          <img :src="review.photo" alt="Photo" class="avatar" />
          <h3>{{ review.name }}</h3>
          <p class="quote">“{{ review.message }}”</p>
        </div>
      </transition-group>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CustomerFeedback',
  data() {
    return {
      currentIndex: 0,
      reviews: [
        {
          name: 'Aarav Sharma',
          message: 'The frame quality is unmatched. Will buy again!',
          photo: 'https://randomuser.me/api/portraits/men/51.jpg'
        },
        {
          name: 'Sneha Reddy',
          message: 'Quick delivery and great service. Loved it!',
          photo: 'https://randomuser.me/api/portraits/women/65.jpg'
        },
        {
          name: 'Rohit Verma',
          message: 'Beautiful designs and easy customization.',
          photo: 'https://randomuser.me/api/portraits/men/34.jpg'
        },
        {
          name: 'Ananya Iyer',
          message: 'FrameShop has made my wall look amazing!',
          photo: 'https://randomuser.me/api/portraits/women/48.jpg'
        },
        {
          name: 'Karan Patel',
          message: 'Premium frames at budget-friendly prices.',
          photo: 'https://randomuser.me/api/portraits/men/70.jpg'
        },
        {
          name: 'Divya Mehta',
          message: 'Absolutely loved the packaging and finish.',
          photo: 'https://randomuser.me/api/portraits/women/52.jpg'
        }
      ],
      timer: null
    };
  },
  computed: {
    visibleSlides() {
      const count = 3; // Number of visible slides
      const start = this.currentIndex;
      return this.reviews.slice(start, start + count).concat(
        this.reviews.slice(0, Math.max(0, start + count - this.reviews.length))
      );
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
    }, 4000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  }
};
</script>

<style scoped>
.carousel-section {
  padding: 4em 1em;
  background: linear-gradient(135deg, #fdfbfb, #ebedee);
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
}

.carousel-title {
  font-size: 2.2rem;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.carousel-wrapper {
  max-width: 1000px;
  margin: 0 auto;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  justify-content: center;
  gap: 2em;
  transition: all 0.5s ease;
}

.carousel-slide {
  background: white;
  border-radius: 16px;
  padding: 2em;
  width: 280px;
  min-height: 280px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  animation: fadeSlide 1s ease-in-out;
}

.carousel-slide:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.avatar {
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #007bff;
  margin-bottom: 1rem;
}

.quote {
  font-style: italic;
  color: #555;
  margin-top: 0.5rem;
  line-height: 1.6;
}

.carousel-enter-active,
.carousel-leave-active {
  transition: opacity 0.5s;
}
.carousel-enter-from,
.carousel-leave-to {
  opacity: 0;
}

@keyframes fadeSlide {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .carousel-track {
    flex-direction: column;
    align-items: center;
  }
  .carousel-slide {
    width: 90%;
  }
}
</style>
