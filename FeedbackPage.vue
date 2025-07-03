<template>
  <div class="feedback-page">
    <div class="thankyou-box">
      <h2>🎉 Thank you for your order!</h2>
      <p>
        You’ve successfully ordered the
        <strong>{{ $route.params.selectedFrame }}</strong> frame!
      </p>
    </div>

    <div class="care-tips">
      <h3>🧼 Frame Care Tips</h3>
      <ul>
        <li>🧽 Use a soft cloth to clean the frame surface regularly.</li>
        <li>🚫 Avoid direct sunlight to preserve colors.</li>
        <li>💧 Keep away from moisture or damp areas.</li>
      </ul>
    </div>

    <div class="invoice-section">
      <h3>📄 Need an Invoice?</h3>
      <button @click="downloadInvoice">Download Invoice</button>
    </div>

    <div class="nav-links">
      <router-link to="/" class="link-btn">🏠 Go to Home</router-link>
      <router-link to="/frames" class="link-btn">🖼️ Explore More Frames</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedbackPage',
  methods: {
    downloadInvoice() {
      const blob = new Blob(
        [`Order Invoice\n\nProduct: ${this.$route.params.selectedFrame}\nStatus: Confirmed\nThank you!`],
        { type: 'text/plain;charset=utf-8' }
      );
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'invoice.txt';
      a.click();
      URL.revokeObjectURL(url);
    }
  }
};
</script>

<style scoped>
.feedback-page {
  min-height: 100vh;
  padding: 2rem;
  background: #f4f6f9;
  font-family: 'Segoe UI', sans-serif;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.thankyou-box,
.care-tips,
.invoice-section,
.nav-links {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  max-width: 600px;
  margin: auto;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  animation: fadeIn 0.6s ease-in;
}

.thankyou-box h2 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  text-align: center;
}

.care-tips h3,
.invoice-section h3 {
  color: #333;
  margin-bottom: 1rem;
}

.care-tips ul {
  list-style: none;
  padding: 0;
}

.care-tips li {
  margin: 0.5rem 0;
  color: #555;
}

.invoice-section button {
  background: #007bff;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;
}

.invoice-section button:hover {
  background: #0056b3;
}

.nav-links {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem;
  text-align: center;
}

.link-btn {
  padding: 0.8rem 1.5rem;
  background-color: #333;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.3s ease;
}

.link-btn:hover {
  background-color: #555;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
