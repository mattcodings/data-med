<template>
  <div
    :class="url ? 'profile-image' : 'no-image'"
    :style="{ backgroundImage: 'url(' + url + ')' }"
  ></div>
  <!-- <img class="profile-image" :src="url" alt="" /> -->
</template>
<script>
import { storage } from '../../firebase/config'
import { ref, getDownloadURL } from 'firebase/storage'
import { getAuth } from 'firebase/auth'
export default {
  props: {
    path: String
  },
  data: () => {
    return {
      url: ''
    }
  },
  mounted() {
    getDownloadURL(ref(storage, getAuth().currentUser.photoURL))
      .then((download_url) => (this.url = download_url))
      .then(console.log(this.url))
  }
}
</script>
<style scoped>
.profile-image {
  width: 300px;
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 100%;
}
.no-image {
  margin: 50px;
}
</style>
