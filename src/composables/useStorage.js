import { ref } from 'firebase/storage'
import { storage } from '../firebase/config'
import getUser from './getUser'
const { user } = getUser()
const useStorage = () => {
  const error = ref(null)
  const url = ref(null)
  const filePath = ref(null)
  const uploadImage = async (file) => {
    filePath.value = `profile-images/${user.value.uid}/${file.name}`
    const storageRef = storage.ref(filePath.value)

    try {
      const res = await storageRef.put(file)
      url.value = res.ref.getDownloadURL()
    } catch (err) {
      console.log(err.message)
      error.value = err.message
    }
  }
  return { error, url, filePath, uploadImage }
}

export default useStorage
