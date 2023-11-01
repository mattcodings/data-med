<template>
  <h2 class="page-header py-3 my-5">Products</h2>
  <products-component />
</template>
<script>
import ProductsComponent from '../components/Products/ProductsComponent.vue'

export default {
  components: { ProductsComponent }
}
</script>
<style scoped>
.page-header {
  text-align: center;
  background-color: #0a3684;
  color: white;
}
</style>
