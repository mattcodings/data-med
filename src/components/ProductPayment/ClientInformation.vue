<template>
  <form>
    <section class="d-flex flex-wrap justify-content-evenly p-5">
      <div>
        <label for="first-name" class="control-label">First Name</label>
        <input
          id="first-name"
          v-model="firstName"
          type="text"
          name="first-name"
          class="form-control"
          required
        />
      </div>
      <div>
        <label for="middle-name" class="control-label">Middle Name (optional)</label>
        <input
          id="middle-name"
          v-model="middleName"
          type="text"
          name="middle-name"
          class="form-control"
        />
      </div>
      <div>
        <label for="last-name" class="control-label">Last Name</label>
        <input
          id="last-name"
          v-model="lastName"
          required
          type="text"
          name="last-name"
          class="form-control"
        />
      </div>
    </section>
    <!-- <section class="member-guest">
      <span class="px-5">Order as a Guest:</span>
      <label for="guest" class="pe-5"
        >Yes
        <input id="guest" type="radio" name="guest" checked="checked" />
      </label>
      <label for="not-guest"
        >No
        <input id="not-guest" type="radio" name="guest" />
      </label>
    </section> -->
    <section class="d-flex justify-content-around p-5">
      <div>
        <label for="billing-address" class="control-label">* Billing Address</label>
        <input
          id="billing-address"
          v-model="billingAddress1"
          type="text"
          name="billing-address"
          class="form-control"
          required
        />
      </div>
      <div>
        <label for="billing-address-2" class="control-label">Billing Address 2</label>
        <input
          id="billing-address-2"
          v-model="billingAddress2"
          type="text"
          name="billing-address-2"
          class="form-control"
          required
        />
      </div>
    </section>
    <section class="d-flex justify-content-evenly p-5">
      <div>
        <label for="city" class="control-label">* City</label>
        <input id="city" v-model="city" type="text" name="city" class="form-control" required />
      </div>
      <div>
        <label for="state" class="control-label">* State</label>
        <input id="state" v-model="state" type="text" name="state" class="form-control" required />
      </div>
      <div>
        <label for="zip-code" class="control-label">* Zip Code</label>
        <input
          id="zip-code"
          v-model="zipCode"
          type="text"
          name="zip-code"
          class="form-control"
          required
        />
      </div>

      <label
        >Shipping:
        <select>
          <option>1 Business Day</option>
        </select>
      </label>
    </section>
    <section class="d-flex justify-content-around p-5">
      <div>
        <label for="name-on-card">* Name on Card</label>
        <input id="name-on-card" type="text" name="name-on-card" />
      </div>
      <div>
        <label for="credit-card-number">* Credit Card Number</label>
        <input id="credit-card-number" type="text" name="credit-card-number" />
      </div>
      <div>
        <label for="expiration-date">* Expiration Date</label>
        <input id="expiration-date" type="text" name="expiration-date" />
      </div>
      <div>
        <label for="cvv">* CVV</label>
        <input id="cvv" type="text" name="cvv" />
      </div>
    </section>
    <button class="submit-info" @click="submitForm">Purchase Items</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      userInformation: {
        firstName: '',
        middleName: '',
        lastName: '',
        billingAddress1: '',
        billingAddress2: '',
        city: '',
        state: '',
        zipCode: 0,
        shipping: ''
      }
    }
  }
}
</script>
<style scoped>
.submit-info {
  display: block;
  margin: auto;
  width: 20%;
}
</style>
