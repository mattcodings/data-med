<template>
  <section class="d-flex gap-3 row justify-content-center">
    <technical-feature
      v-for="data in content"
      :key="data.title"
      :image="data.image"
      :title="data.title"
      :description="data.description"
    />
  </section>
</template>
<script>
import TechnicalFeature from './TechnicalFeature.vue'
import {
  digitalFormattingContent,
  technicalFrameworkContent,
  trackingCareContent
} from '../data.js'
export default {
  components: { TechnicalFeature },
  name: 'TechnicalFeatures',
  setup() {
    const content = [digitalFormattingContent, trackingCareContent, technicalFrameworkContent]
    return {
      content
    }
  }
}
</script>
