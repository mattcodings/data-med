<template>
  <div class="text-center">
    <label class="control-label image-label">Upload Profile Image</label>
    <input type="file" ref="profileImage" @change="handleChange" class="form-control" /><br />
    <button @click="uploadImage">Save</button>
  </div>
</template>
<script>
import { storage } from '../../firebase/config'
import { ref, uploadBytes } from 'firebase/storage'
import { getAuth, updateProfile } from 'firebase/auth'

export default {
  name: 'ProfileImage',
  methods: {
    uploadImage() {
      const uniqueId = getAuth().currentUser.uid
      const storageRef = ref(storage, 'images/profileImage' + uniqueId)
      uploadBytes(storageRef, this.$refs.profileImage.files[0])
        .then((snapshot) => {
          console.log('uploaded')
        })
        .then(updateProfile(getAuth().currentUser, { photoURL: 'images/profileImage' + uniqueId }))
    }
  }
}
</script>
<style scoped>
.image-label {
  font-size: 2rem;
}
</style>
