<template>
  <section class="d-flex gap-5">
    <product-list :product-list="productsList" @handle-click="updateCart" />

    <product-cart :shopping-cart="shoppingCart" />
  </section>
</template>

<script>
import { products } from './products'
import ProductList from './ProductList.vue'
import ProductCart from './ProductCart.vue'
export default {
  name: 'ProductsComponent',
  components: { ProductList, ProductCart },
  data() {
    return {
      shoppingCart: JSON.parse(localStorage.getItem('shoppingCart')) || [],
      productsList: products
    }
  },
  methods: {
    updateCart(item) {
      this.shoppingCart.push(item)
      console.log(this.shoppingCart)
      localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart))
    },
    updateValue(item) {
      console.log(item)
    }
  }
}
</script>
<style scoped>
.shopping-cart {
}
</style>
