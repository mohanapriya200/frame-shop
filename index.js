import { createStore } from 'vuex';
export default createStore({
  state: {
    cart: []
  },
  mutations: {
    addToCart(state, frame) {
      state.cart.push(frame);
    }
  }
});

