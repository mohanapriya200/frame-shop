<template>
  <section class="gallery-wall">
    <h2 class="section-title">🖼️ Gallery Walls</h2>

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
        {
          name: 'Osaka Trio',
          price: 8999,
          image: 'https://images.unsplash.com/photo-1585550641454-9b7d6e49004d?w=500&h=300&fit=crop&auto=format'
        },
        {
          name: 'Uneven Trio - Metal Frame',
          price: 11449,
          image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&h=300&fit=crop&auto=format'
        },
        {
          name: 'Snow Pair',
          price: 6999,
          image: 'https://images.unsplash.com/photo-1505692794403-75b5e6adad3c?w=500&h=300&fit=crop&auto=format'
        },
        {
          name: '31" x 24" Gallery Wall Metal Frames (Set of 7)',
          price: 23999,
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=300&fit=crop&auto=format'
        },
        {
          name: '45" x 41" Gallery Wall HDPS Frames (Set of 13)',
          price: 14999,
          image: 'https://images.unsplash.com/photo-1595526114035-93b8cc8a60fc?w=500&h=300&fit=crop&auto=format'
        },
        {
          name: '64"x42" Gallery Wall Wooden Frame (Set of 6)',
          price: 36999,
          image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=500&h=300&fit=crop&auto=format'
        },
        {
          name: 'Metallic Quint',
          price: 13799,
          image: 'https://images.unsplash.com/photo-1586244431083-30fdd8d5974b?w=500&h=300&fit=crop&auto=format'
        },
        {
          name: '56"x44" Gallery Wall Wooden Frame (Set of 8)',
          price: 22999,
          image: 'https://images.unsplash.com/photo-1616627980541-296f51a7587d?w=500&h=300&fit=crop&auto=format'
        }
      ]
    };
  }
};
</script>
<style scoped>
.gallery-wall {
  padding: 3rem 1rem;
  background: linear-gradient(to bottom right, #fdfbfb, #ebedee);
  font-family: 'Segoe UI', sans-serif;
  animation: fadeIn 0.8s ease-in-out;
}

.section-title {
  text-align: center;
  font-size: 2.4rem;
  font-weight: bold;
  color: #2c3e50;
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
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.07);
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
