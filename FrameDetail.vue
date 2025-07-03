<template>
  <div v-if="frame">
    <h2>{{ frame.name }}</h2>
    <img :src="frame.image" :alt="frame.name" class="frame-img" />
    <p>\${{ frame.price }}</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() { return { frame: null }; },
  created() {
    const f = this.$store.getters.allFrames.find(x => x.id == this.id);
    this.frame = f;
  }
};
</script>
