<template>
  <footer class="footer" @mousemove="handleMouseMove" ref="footer">
    <div class="footer-top fade-in">
      <div class="newsletter section">
        <h3>Newsletter</h3>
        <p>Sign up to our newsletter to receive exclusive offers.</p>
        <input type="email" placeholder="E-mail" />
        <button>Subscribe</button>
      </div>

      <div class="footer-links section">
        <h4>About</h4>
        <ul>
          <li><a href="#">Book an Appointment</a></li>
          <li><a href="#">Blogs</a></li>
          <li><a href="#">Materials</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Refund Policy</a></li>
          <li><a href="#">Shipping Policy</a></li>
        </ul>
      </div>

      <div class="contact-info section">
        <h4>Get In Touch</h4>
        <p>Contact us via Email or Phone</p>
        <p>🕒 Monday to Saturday - 10:00 am to 7:00 pm</p>
        <p>📧 hello@frameshop.com</p>
        <p>📞 Online Orders - 9004926500</p>
        <p>📞 Store - 9930267103</p>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2025 - FrameShop</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar',
  methods: {
    handleMouseMove(e) {
      const footer = this.$refs.footer;
      const x = (e.clientX - window.innerWidth / 2) / 80;
      const y = (e.clientY - window.innerHeight / 2) / 80;
      footer.style.transform = `translate(${x}px, ${y}px)`;
    }
  }
};
</script>
<style scooped>
.footer {
  background: #1c1c1c;
  color: #f0f0f0;
  padding: 2em 1em;
  font-size: 14px;
}

.footer-top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2em;
}

.newsletter {
  flex: 1;
  min-width: 250px;
}

.newsletter input {
  padding: 0.5em;
  margin-top: 0.5em;
  width: 80%;
  max-width: 300px;
  border: none;
  border-radius: 4px;
}

.newsletter button {
  display: block;
  margin-top: 0.5em;
  padding: 0.5em 1em;
  background-color: #ffcc00;
  color: #1c1c1c;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;
  transition: transform 0.3s;
}

.newsletter button:hover {
  animation: bounce 0.4s ease;
}

.footer-links,
.contact-info {
  flex: 1;
  min-width: 250px;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.5em;
}

.footer-links a {
  color: #ccc;
  text-decoration: none;
  position: relative;
  transition: color 0.3s;
}

.footer-links a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0%;
  height: 2px;
  background: #ffcc00;
  transition: width 0.3s;
}

.footer-links a:hover {
  color: #fff;
}

.footer-links a:hover::after {
  width: 100%;
}

.footer-bottom {
  text-align: center;
  border-top: 1px solid #444;
  margin-top: 2em;
  padding-top: 1em;
  font-size: 12px;
}

/* Animations */
@keyframes bounce {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.animate-text {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeSlideIn 1s ease-out forwards;
}

@keyframes fadeSlideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>  something to be change