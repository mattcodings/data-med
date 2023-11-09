<template>
  <section class="d-flex">
    <div>
      <client-information />
    </div>
    <ul class="cart-list">
      <li v-for="item in currentCartItems" :key="item.id" class="d-flex flex-wrap my-5">
        <img class="product-image" src="./product-placeholder.jpg" :alt="item.name" />
        <div class="product-info">
          <h3>{{ item.name }}</h3>
          <p>Condition: {{ item.condition }}</p>
          <p>Price: ${{ item.price }}</p>
          <p>{{ item.description }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
import ClientInformation from './ClientInformation.vue'

export default {
  components: { ClientInformation },
  data() {
    return {
      currentCartItems: JSON.parse(localStorage.getItem('shoppingCart'))
    }
  }
}
</script>
<style scoped>
.product-info {
  width: 300px;
}
</style>
