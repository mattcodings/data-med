<template>
  <section class="d-flex">
    <form @submit.prevent="filterListResults" class="filter">
      <label>New Only <input v-model="newOnly" type="checkbox" /> </label>
      <h5>Max Price</h5>
      <input v-model="priceFilter" type="number" min="0" max="10000" />
      <button>Filter</button>
    </form>
    <ul>
      <li v-for="product in filterProducts" :key="product.id" class="d-flex mb-5">
        <img src="./product-placeholder.jpg" :alt="product.name" />
        <div>
          <h3>{{ product.name }}</h3>
          <p>Condition: {{ product.condition }}</p>
          <p>Price: ${{ product.price }}</p>
          <p>{{ product.description }}</p>
          <button @click="handleClick(product)">Add To Cart</button>
        </div>
      </li>
    </ul>
    <label>Search <input v-model="search" type="text" /></label>
  </section>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    productList: Array
  },
  data() {
    return {
      newProductList: this.productList,
      search: '',
      newOnly: false,
      priceFilter: 10000,
      shoppingCart: [],
      value: {}
    }
  },
  computed: {
    filterProducts() {
      return this.newProductList.filter((product) =>
        product.name.toLowerCase().includes(this.search)
      )
    }
  },
  methods: {
    filterListResults() {
      this.newProductList = this.productList
      this.newProductList = this.newProductList.filter(
        (product) => product.price < Number(this.priceFilter)
      )
      if (this.newOnly) {
        this.newProductList = this.newProductList.filter((product) => product.condition === 'New')
      }
    },
    addProductToCart(item) {
      this.shoppingCart.push(item)
    },
    handleClick(item) {
      this.$emit('handleClick', item)
    }
  }
}
</script>
<style scoped>
.filter {
  background-color: #dedede;
  width: 150px;
}
img {
  width: auto;
  height: 200px;
}
</style>
