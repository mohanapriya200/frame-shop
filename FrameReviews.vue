<template>
  <div class="feedback-container">
    <h2 class="feedback-title">💬 Customer Feedback</h2>

    <form @submit.prevent="submitReview" class="feedback-form">
      <input v-model="newReview.name" type="text" placeholder="Your name" required />
      <textarea v-model="newReview.message" placeholder="Your feedback..." required></textarea>
      <button type="submit">Submit</button>
    </form>

    <div v-if="reviews.length" class="review-list">
      <div v-for="(review, index) in reviews" :key="index" class="review-card">
        <h4>{{ review.name }}</h4>
        <p>{{ review.message }}</p>
      </div>
    </div>
    <p v-else class="no-reviews">No reviews yet. Be the first to share your thoughts!</p>
  </div>
</template>

<script>
export default {
  name: 'FrameReviews',
  data() {
    return {
      newReview: {
        name: '',
        message: ''
      },
      reviews: []
    };
  },
  methods: {
    submitReview() {
      if (this.newReview.name && this.newReview.message) {
        this.reviews.push({ ...this.newReview });
        this.newReview.name = '';
        this.newReview.message = '';
      }
    }
  }
};
</script>

<style scoped>
.feedback-container {
  background: rgba(255, 255, 255, 0.9);
  padding: 2em;
  border-radius: 16px;
  max-width: 600px;
  margin: 2em auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.feedback-title {
  text-align: center;
  margin-bottom: 1em;
  font-size: 1.8em;
  color: #333;
}

.feedback-form {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.feedback-form input,
.feedback-form textarea {
  padding: 0.8em;
  font-size: 1em;
  border-radius: 8px;
  border: 1px solid #ccc;
  resize: none;
}

.feedback-form button {
  padding: 0.7em 1em;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.feedback-form button:hover {
  background-color: #555;
}

.review-list {
  margin-top: 2em;
}

.review-card {
  background: #f9f9f9;
  padding: 1em;
  border-radius: 10px;
  margin-bottom: 1em;
  border-left: 5px solid #333;
}

.review-card h4 {
  margin: 0;
  color: #111;
}

.review-card p {
  margin: 0.5em 0 0;
  color: #444;
}

.no-reviews {
  text-align: center;
  color: #666;
  margin-top: 2em;
}
</style>
