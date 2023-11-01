<template>
  <section class="d-flex gap-3 row justify-content-center mb-3">
    <technical-feature
      v-for="data in content"
      :key="data.title"
      :title="data.title"
      :description="data.description"
    />
  </section>
</template>

<script>
import TechnicalFeature from './TechnicalFeature.vue'
import { qualityContent, costsContent, timeContent } from '../data'
export default {
  name: 'EHRCharacteristics',
  components: {
    TechnicalFeature
  },
  setup() {
    const content = [qualityContent, costsContent, timeContent]
    return {
      content
    }
  }
}
</script>
