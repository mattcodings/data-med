<template>
  <section>
    <product-checkout />
    <!-- <TabContainer>
      <tab-item header="Client Information"><ClientInformation /></tab-item>
      <tab-item header="Payment Information"><PaymentInformation /></tab-item>
      <tab-item header="Review and Checkout"><ReviewAndCheckout /></tab-item>
    </TabContainer> -->
  </section>
</template>
<script>
import TabContainer from '../components/ProductPayment/TabContainer.vue'
import TabItem from '../components/ProductPayment/TabItem.vue'
import ClientInformation from '../components/ProductPayment/ClientInformation.vue'

import ReviewAndCheckout from '../components/ProductPayment/ReviewAndCheckout.vue'
import ProductCheckout from '../components/ProductPayment/ProductCheckout.vue'
export default {
  components: {
    ProductCheckout,
    TabContainer,
    TabItem,
    ClientInformation,

    ReviewAndCheckout
  }
}
</script>
<style scoped>
.payment-tabs {
  width: 75%;
  margin: auto;
}
</style>
