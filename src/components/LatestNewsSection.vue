<template>
  <section class="d-flex flex-wrap justify-content-around">
    <latest-news
      v-for="result in results.articles"
      :key="result.title"
      :title="result.title"
      :image="result.image"
      :description="result.description"
      :link="result.url"
    />
  </section>
</template>
<script>
import { ref } from 'vue'
import axios from 'axios'
import LatestNews from './LatestNews.vue'
export default {
  name: 'LatestNewsSection',
  components: { LatestNews },
  setup() {
    const results = ref([])
    const getNews = async () => {
      const response = await axios.get(
        'https://gnews.io/api/v4/search?q=medical&lang=en&country=us&max=2&in=medical&apikey=d042cc97dbb8d1b1b211a995f262de33'
      )

      results.value = await response.data
      console.log(results.value)
    }
    getNews()
    return {
      results
    }
  }
}
</script>
