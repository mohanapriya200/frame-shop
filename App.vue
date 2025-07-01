<template>
  <div>
    <HeaderBar />
    <router-view />
    <FooterBar />
    <CustomerBenefits />
  
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue';
import CustomerBenefits from './components/CustomerBenefits.vue';
import FooterBar from './components/FooterBar.vue';

export default {
  name: 'App',
  components: { HeaderBar,CustomerBenefits, FooterBar }
};
</script>
