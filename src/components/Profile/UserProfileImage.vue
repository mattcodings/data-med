<template>
  <div>hello</div>
  <form @submit.prevent="updatePhoto">
    <input v-model="name" type="text" />
    <input type="file" @change="onFileChange" />
    <button>Save</button>
  </form>
  <img :src="'@' + user.photoURL" />
</template>
<script>
import { getAuth, updateProfile } from 'firebase/auth'
import { ref } from 'vue'
export default {
  setup() {
    const auth = getAuth()
    const name = ref('')
    const photo = ref('')
    const user = auth.currentUser
    const onFileChange = (e) => {
      photo.value = e.target.value
    }
    const updatePhoto = () => {
      updateProfile(auth.currentUser, { displayName: name.value, photoURL: photo.value }).then(
        () => {
          console.log(auth.currentUser)
        }
      )
    }

    return { name, photo, user, onFileChange, updatePhoto }
  }
}
</script>
