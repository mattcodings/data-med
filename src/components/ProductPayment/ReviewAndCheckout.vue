<template>
  <ul class="cart-list">
    <li v-for="item in currentCartItems" :key="item.id" class="d-flex my-5">
      <img class="product-image" src="./product-placeholder.jpg" :alt="item.name" />
      <div>
        <h3>{{ item.name }}</h3>
        <p>Condition: {{ item.condition }}</p>
        <p>Price: ${{ item.price }}</p>
        <p>{{ item.description }}</p>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      currentCartItems: JSON.parse(localStorage.getItem('shoppingCart'))
    }
  }
}
</script>
