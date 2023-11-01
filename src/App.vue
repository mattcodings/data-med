<template>
  <main-nav />
  <router-view />
</template>
<script>
import MainNav from './components/NavBar/MainNav.vue'
export default {
  components: { MainNav },
  name: 'App'
}
</script>
<style>
button {
  background: #0a3684;
  color: #fff;
  padding: 5px 25px;
  border-radius: 50px;
}
a {
  color: white;
  text-decoration: none;
}
.product-image {
  width: auto;
  height: 150px;
}
.cart-list {
  list-style-type: none;
}
</style>
