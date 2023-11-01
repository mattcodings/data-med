<template>
  <section class="col-md-3 col-sm-10 p-3 p-lg-5 text-center border">
    <img v-if="image" :src="image" :alt="title" />
    <h4>{{ title }}</h4>
    <p class="text-start description">{{ description }}</p>
    <button class="read-more">Read More</button>
  </section>
</template>
<script>
export default {
  name: 'TechnicalFeatures',
  props: {
    image: {
      type: String,
      required: false,
      default: ''
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
  // setup() {}
}
</script>
<style scoped>
img {
  width: 100%;
  border-radius: 10px;
}
.read-more {
}
</style>
