<template>
  <section class="d-flex col-md-9 gap-5 my-5">
    <img class="news-image" :src="image" />
    <div>
      <h3>{{ title }}</h3>

      <p>{{ description }}</p>
      <a :href="url" target="_blank" class="news-button"><button>Read More</button></a>
    </div>
  </section>
</template>
<script>
export default {
  name: 'LatestNews',
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
.news-image {
  width: 300px;
  height: auto;
}
.news-button {
  display: block;
}
</style>
