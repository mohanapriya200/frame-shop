<template>
  <div class="order-page">
    <h2>📦 Order Your Frame</h2>

    <form @submit.prevent="submitOrder">
      <div class="form-group">
        <label for="name">👤 Name:</label>
        <input type="text" id="name" v-model="name" required />
      </div>

      <div class="form-group">
        <label for="address">🏠 Address:</label>
        <textarea id="address" v-model="address" required></textarea>
      </div>

      <div class="form-group">
        <label for="phone">📞 Phone:</label>
        <input type="tel" id="phone" v-model="phone" required />
      </div>

      <div class="form-group">
        <label>🖼️ Frame:</label>
        <p><strong>{{ selectedFrame }}</strong></p>
      </div>

      <button type="submit">✅ Place Order</button>
    </form>

    <div v-if="orderPlaced" class="confirmation">
      🎉 Order placed successfully! We'll contact you soon.
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderPage',
  data() {
    return {
      name: '',
      address: '',
      phone: '',
      orderPlaced: false
    };
  },
  computed: {
    selectedFrame() {
      return this.$route.params.selectedFrame || 'Unknown Frame';
    }
  },
  methods: {
    submitOrder() {
      if (this.name && this.address && this.phone) {
        this.orderPlaced = true;
        console.log('Order Details:', {
          name: this.name,
          address: this.address,
          phone: this.phone,
          frame: this.selectedFrame
        });

        // Here you can integrate an API call if needed
      }
    }
  }
};
</script>

<style scoped>
.order-page {
  max-width: 500px;
  margin: 3em auto;
  padding: 2em;
  background: #fdfdfd;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  color: #333;
}

h2 {
  text-align: center;
  margin-bottom: 1.5em;
}

.form-group {
  margin-bottom: 1em;
}

label {
  display: block;
  margin-bottom: 0.4em;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 0.6em;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1em;
}

button {
  display: block;
  width: 100%;
  padding: 0.75em;
  background: #28a745;
  color: white;
  font-size: 1.1em;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1em;
}

button:hover {
  background: #218838;
}

.confirmation {
  margin-top: 2em;
  background: #d4edda;
  color: #155724;
  padding: 1em;
  border-radius: 10px;
  text-align: center;
}
</style>
