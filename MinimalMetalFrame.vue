<template>
  <div>
    <button @click="goToMinimalFrame">Go to Minimal Metal Frame</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToMinimalFrame() {
      this.$router.push({ name: 'MinimalMetalFrame' });
    }
  }
}
</script>
