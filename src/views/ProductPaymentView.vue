<template>
  <section class="payment-tabs">
    <TabContainer>
      <tab-item header="Client Information"><ClientInformation /></tab-item>
      <tab-item header="Payment Information"><PaymentInformation /></tab-item>
      <tab-item header="Review and Checkout"><ReviewAndCheckout /></tab-item>
    </TabContainer>
  </section>
</template>
<script>
import TabContainer from '../components/ProductPayment/TabContainer.vue'
import TabItem from '../components/ProductPayment/TabItem.vue'
import ClientInformation from '../components/ProductPayment/ClientInformation.vue'
import PaymentInformation from '../components/ProductPayment/PaymentInformation.vue'
import ReviewAndCheckout from '../components/ProductPayment/ReviewAndCheckout.vue'
export default {
  components: { TabContainer, TabItem, ClientInformation, PaymentInformation, ReviewAndCheckout }
}
</script>
<style scoped>
.payment-tabs {
  width: 75%;
  margin: auto;
}
</style>
