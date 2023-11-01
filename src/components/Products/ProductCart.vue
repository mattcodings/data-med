<template>
  <section class="shopping-cart">
    <font-awesome-icon
      v-if="!cartOpen"
      icon="fa-solid fa-cart-shopping"
      class="cart-icon"
      @click="openCartPanel"
    />
    <section v-else>
      <font-awesome-icon icon="fa-solid fa-xmark" class="close-icon" @click="openCartPanel" />
      <section v-if="shoppingCart.length" class="shopping-cart-open col-3">
        <ul class="cart-list">
          <li v-for="item in shoppingCart" :key="item.id" class="cart-product-container p-2 m-2">
            <img class="product-image" src="./product-placeholder.jpg" :alt="item.name" />
            <div>
              <h3>{{ item.name }}</h3>
              <p>Condition: {{ item.condition }}</p>
              <p>Price: ${{ item.price }}</p>
              <p>{{ item.description }}</p>
            </div>
            <button class="mb-2" @click="deleteItem(item)">Remove Item</button>
          </li>
          <div class="d-flex checkout p-3 justify-content-around">
            <h3>Total Cost: ${{ totalCost }}</h3>
            <router-link to="/checkout"><button>Proceed to Checkout</button></router-link>
          </div>
        </ul>
      </section>
      <section v-else>
        <p>Shopping Cart Empty</p>
      </section>
    </section>
  </section>
</template>
<script>
export default {
  name: 'ProductCart',
  props: {
    shoppingCart: Array
  },
  data() {
    return {
      currentCart: this.shoppingCart,
      cartOpen: false
    }
  },
  computed: {
    totalCost() {
      let total = 0
      this.currentCart.forEach((item) => {
        total += item.price
      })
      return total
    }
  },

  methods: {
    deleteItem(item) {
      this.currentCart.splice(this.currentCart.indexOf(item), 1)
      localStorage.setItem('shoppingCart', JSON.stringify(this.currentCart))
    },
    openCartPanel() {
      this.cartOpen = !this.cartOpen
    }
  }
}
</script>
<style scoped>
.cart-icon,
.close-icon {
  height: 50px;
  width: auto;
  cursor: pointer;
}
.cart-product-container {
  background-color: #dedede;
}
.checkout {
  background-color: #dedede;
}
.shopping-cart-open {
  position: absolute;
  right: 0px;
}
</style>
