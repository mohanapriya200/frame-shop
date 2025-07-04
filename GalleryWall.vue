<template>
  <section class="gallery-wall">
    <h2 class="section-title">Gallery Walls</h2>
    <div class="gallery-grid">
      <div class="product-card" v-for="(product, index) in products" :key="index">
        <div class="image-wrapper">
          <img :src="product.image" :alt="product.name" class="product-image" />
        </div>
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">Sale price ₹ {{ product.price.toLocaleString() }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GalleryWall',
  data() {
    return {
      products: [
      { id: 1, name: 'Osaka Trio (set of 3)', price: 10000, image: require('@/assets/b1.jpg') },
        {
        id:2,name: 'Uneven Trio - Metal Frame (set of 5)', price: 11449,
          image: require('@/assets/b2.jpg')
        },
        {
          name: 'Snow Pair (set of 4)',
          price: 6999,
          image:  require('@/assets/b3.jpg')
        },
        {
          name: ' Wall Metal Frames(set of 15)',
          price: 23999,
          image:  require('@/assets/b4.jpg')
        },
        {
          name:' Wall HDPS Frames (Set of 13)',
          price: 14999,
          image: require('@/assets/b5.jpg')
        },
        {
          name: 'Wall Wooden Frame (Set of 6)',
          price: 36999,
          image: require('@/assets/b6.jpg')
        },
        {
          name: 'Metallic Quint',
          price: 13799,
          image: require('@/assets/b8.jpg')
        },
        {
          name: 'Acrylic Frame (Set of 3)',
          price: 22999,
          image: require('@/assets/b7.jpg')
        }
      ]
    };
  }
};
</script>
<style scoped>
.gallery-wall {
  padding: 3rem 1rem;
  background: linear-gradient(to bottom right,rgb(244, 245, 246),rgb(243, 246, 248));
  font-family: 'Segoe UI', sans-serif;
  animation: fadeIn 0.8s ease-in-out;
}

.section-title {
  text-align: center;
  font-size: 2.4rem;
  font-weight: bold;
  color:rgb(17, 17, 17);
  margin-bottom: 2rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.product-card {
  background: rgba(88, 86, 86, 0.07);
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(112, 109, 109, 0.07);
  overflow: hidden;
  text-align: center;
  padding-bottom: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: slideUp 0.5s ease forwards;
}

.product-card:hover {
  transform: scale(1.03);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
}

.image-wrapper {
  overflow: hidden;
  height: 200px;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .product-image {
  transform: scale(1.08);
}

.product-name {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 1rem 0 0.4rem;
  color: #2c3e50;
}

.product-price {
  font-size: 1rem;
  color: #007bff;
  font-weight: 500;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
