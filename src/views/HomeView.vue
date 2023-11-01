<template>
  <HomeHeader />
  <EHRCharacteristics />
  <div class="d-flex gap-5">
    <span class="col-1"></span>
    <h2 class="border-bottom col-9 mt-5">Technical Features</h2>
    <span class="col-1"></span>
  </div>
  <technical-features />
  <div class="d-flex gap-5">
    <span class="col-1"></span>
    <h2 class="border-bottom col-9 mt-5">Latest News</h2>
    <span class="col-1"></span>
  </div>
  <latest-news-section />
</template>
<script>
import HomeHeader from '../components/HomeHeader.vue'
import EHRCharacteristics from '../components/EHRCharacteristics.vue'
import TechnicalFeatures from '../components/TechnicalFeatures.vue'
import LatestNewsSection from '../components/LatestNewsSection.vue'
export default {
  name: 'HomeView',
  components: { TechnicalFeatures, EHRCharacteristics, LatestNewsSection, HomeHeader }
}
</script>
