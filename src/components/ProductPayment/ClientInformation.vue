<template>
  <form>
    <section class="d-flex justify-content-evenly p-5">
      <div>
        <label for="first-name" class="control-label">First Name</label>
        <input id="first-name" type="text" name="first-name" class="form-control" required />
      </div>
      <div>
        <label for="middle-name" class="control-label">Middle Name (optional)</label>
        <input id="middle-name" type="text" name="middle-name" class="form-control" />
      </div>
      <div>
        <label for="last-name" class="control-label">Last Name</label>
        <input id="last-name" required type="text" name="last-name" class="form-control" />
      </div>
    </section>
    <section class="member-guest">
      <span class="px-5">Order as a Guest:</span>
      <label for="guest" class="pe-5"
        >Yes
        <input id="guest" type="radio" name="guest" checked="checked" />
      </label>
      <label for="not-guest"
        >No
        <input id="not-guest" type="radio" name="guest" />
      </label>
    </section>
    <section class="d-flex justify-content-around p-5">
      <div>
        <label for="billing-address" class="control-label">* Billing Address</label>
        <input
          id="billing-address"
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
        <input id="city" type="text" name="city" class="form-control" required />
      </div>
      <div>
        <label for="state" class="control-label">* State</label>
        <input id="state" type="text" name="state" class="form-control" required />
      </div>
      <div>
        <label for="zip-code" class="control-label">* Zip Code</label>
        <input id="zip-code" type="text" name="zip-code" class="form-control" required />
      </div>

      <label
        >Shipping:
        <select>
          <option>1 Business Day</option>
        </select>
      </label>
    </section>
  </form>
</template>
<script></script>
<style scoped></style>
