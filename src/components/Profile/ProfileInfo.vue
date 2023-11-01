<template>
  <section :class="dataEntered ? 'd-flex gap-5' : 'd-flex flex-row-reverse gap-5'">
    <div class="me-5 client-info">
      <h2>DataMed Profile For {{ currentData.name.value }}</h2>
      <h3>Name: {{ currentData.name.value }}</h3>
      <h3>Company: {{ currentData.company.value }}</h3>
      <h3>Email: {{ currentData.email.value }}</h3>
      <h3>Phone Number: {{ currentData.phone.value }}</h3>
      <h3>Address: {{ currentData.address.value }}</h3>
    </div>
    <form v-if="!dataEntered" class="ms-5" @submit.prevent="handleSubmit">
      <h3>Create Profile</h3>
      <label for="name" class="control-label mt-3"
        >Name
        <input v-model="name" type="text" name="name" class="form-control" required />
      </label>
      <br />
      <label class="mt-3 control-label"
        >Company
        <input v-model="company" type="text" name="company" class="form-control" required />
      </label>
      <br />
      <label class="mt-3 control-label"
        >Email
        <input v-model="email" type="email" name="email" class="form-control" required />
      </label>
      <br />
      <label class="mt-3 control-label"
        >Phone
        <input v-model="phone" type="phone" name="phone" class="form-control" required />
      </label>
      <br />
      <label class="mt-3 control-label"
        >Address
        <input v-model="address" type="text" name="address" class="form-control" required />
      </label>
      <br />
      <button class="mt-3">Add Info</button>
    </form>

    <button v-else @click="openUpdateList" class="m-5">Update Profile</button>
    <form v-if="openUpdate" @submit.prevent="handleUpdate">
      <label for="name"
        >Name
        <input v-model="name" type="text" name="name" vale="abc" required />
      </label>
      <br />
      <label
        >Company
        <input v-model="company" type="text" name="company" />
      </label>
      <br />
      <label
        >Email
        <input v-model="email" type="text" name="email" />
      </label>
      <br />
      <label
        >Phone
        <input v-model="phone" type="text" name="phone" />
      </label>
      <br />
      <label
        >Address
        <input v-model="address" type="text" name="address" />
      </label>
      <br />
      <button>Update Info</button>
    </form>
    <ul class="d-none">
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </section>
</template>
<script>
import { onBeforeMount, ref } from 'vue'
import { db } from '../../firebase/config'
import { collection, getDocs, doc, updateDoc, setDoc, getDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

export default {
  setup() {
    const users = ref([])
    const colRef = collection(db, 'User')
    const uniqueId = getAuth().currentUser.uid
    const name = ref('')
    const email = ref('')
    const company = ref('')
    const phone = ref('')
    const address = ref('')
    const openUpdate = ref(false)
    const dataEntered = ref(false)
    let currentData = {
      name: name,
      email: email,
      company: company,
      phone: phone,
      address: address
    }
    getDoc(doc(db, 'User', uniqueId))
    const getUserInfo = async () => {
      const docSnap = await getDoc(doc(db, 'User', uniqueId))
      if (docSnap.exists()) {
        ;(name.value = docSnap.data().name),
          (company.value = docSnap.data().company),
          (email.value = docSnap.data().email),
          (phone.value = docSnap.data().phone),
          (address.value = docSnap.data().address),
          (dataEntered.value = docSnap.data().address)
      }
      currentData = {
        name: name.value,
        email: email.value,
        company: company.value,
        phone: phone.value,
        address: address.value
      }
      console.log(currentData)
    }
    onBeforeMount(() => {
      getUserInfo()
      console.log(currentData)
    })

    getDocs(colRef).then((snapshot) => {
      let docs = []
      snapshot.docs.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id })
      })
      users.value = docs
    })
    const handleSubmit = async () => {
      dataEntered.value = true
      await setDoc(doc(db, 'User', uniqueId), {
        name: name.value,
        email: email.value,
        company: company.value,
        phone: phone.value,
        address: address.value,
        dataEntered: dataEntered.value
      })
    }
    const handleUpdate = async () => {
      const docRef = doc(db, 'User', uniqueId)
      updateDoc(docRef, {
        name: name.value,
        email: email.value,
        company: company.value,
        phone: phone.value,
        address: address.value
      })
      openUpdate.value = false
    }
    const openUpdateList = () => {
      openUpdate.value = !openUpdate.value
    }
    return {
      users,
      uniqueId,
      name,
      email,
      company,
      phone,
      address,
      handleSubmit,
      handleUpdate,
      currentData,
      getUserInfo,
      onBeforeMount,
      openUpdate,
      openUpdateList,
      dataEntered
    }
  }
}
</script>
<style scoped>
.client-info {
  width: 50%;
  text-wrap: wrap;
}
input {
  width: 250px;
}
button {
  width: 250px;
  height: 50px;
}
</style>
