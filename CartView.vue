<template>
  <div>
    <h2>Your Cart</h2>
    <div v-for="item in cartItems" :key="item.id">
      <p>{{ item.name }} - \${{ item.price }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: { ...mapGetters(['cartItems']) }
};
</script>
