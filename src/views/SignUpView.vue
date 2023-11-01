<template>
  <form class="py-5 my-5" @submit.prevent="register">
    <h1>Create an Account</h1>

    <input v-model="email" type="email" placeholder="Email" class="my-5" />
    <input
      v-if="!showPassword"
      v-model="password"
      type="password"
      placeholder="Password"
      class="input-password"
    />
    <input v-else v-model="password" type="text" placeholder="Password" class="input-password" />
    <font-awesome-icon v-if="!showPassword" icon="fa-solid fa-eye " @click="togglePassword" />
    <font-awesome-icon v-else icon="fa-solid fa-eye-slash" @click="togglePassword" />
    <button class="my-5 login-button">Create Account</button>
    <div v-if="error">{{ error }}</div>
    <span>Already have an account? <router-link to="/sign-in">Sign In Here</router-link></span>
  </form>
</template>
<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useSignup from '../composables/useSignup'
export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const showPassword = ref(false)
    const { signup, error } = useSignup()
    const router = useRouter()
    const register = async () => {
      await signup(email.value, password.value)

      if (!error.value) {
        router.push('/')
      }
    }
    const togglePassword = () => {
      showPassword.value = !showPassword.value
    }
    return { email, password, register, error, showPassword, togglePassword }
  }
}

// const router = useRouter()
// const register = () => {
//   createUserWithEmailAndPassword(getAuth(), email.value, password.value)
//     .then((data) => {
//       console.log('Successfully registered!')
//       router.push('/profile')
//     })
//     .catch((error) => {
//       console.log(error.code)
//       alert(error.message)
//     })
// }
// const googleSignIn = () => {}
</script>
<style scoped>
form {
  border: 1px solid black;
  text-align: center;
  width: 30%;
  margin: auto;
  border: 3px solid black;
  border-radius: 20px;
}
input {
  display: block;
  margin: auto;
}
.input-password {
  display: inline-flex;
}
.login-button {
  display: block;
  margin: auto;
}
a {
  color: #222;
  text-decoration: underline;
}
</style>
