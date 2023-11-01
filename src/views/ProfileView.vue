<template>
  <section class="d-flex profile-data">
    <div>
      <uploaded-profile-image />
      <profile-image />
    </div>
    <profile-info />
  </section>
</template>
<script>
import ProfileImage from '../components/Profile/ProfileImage.vue'
import UploadedProfileImage from '../components/Profile/UploadedProfileImage.vue'
import ProfileInfo from '../components/Profile/ProfileInfo.vue'
export default {
  name: 'ProfileView',
  components: { ProfileImage, UploadedProfileImage, ProfileInfo }
}
</script>
<style scoped>
.profile-data {
  width: 80%;
  margin: auto;
  gap: 10%;
}
</style>
