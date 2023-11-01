<template>
  <nav class="d-flex justify-content-evenly">
    <li v-for="item in menuItems" :key="item.text">
      <router-link :to="item.url" class="nav-item">{{ item.text }}</router-link>
    </li>
    <section class="d-flex gap-5">
      <div v-if="user">Logged in as {{ user.email || 'New User' }}</div>
      <div v-if="user">
        <button @click="handleSignOut">Sign Out</button>
      </div>
      <div v-if="!user">
        <button><router-link to="/sign-in">Login/Register</router-link></button>
      </div>
    </section>
  </nav>
</template>
<script>
import getUser from '../../composables/getUser'
import { auth } from '../../firebase/config'
import { signOut } from 'firebase/auth'

export default {
  name: 'MainNav',
  setup() {
    const { user } = getUser()
    const menuItems = [
      { text: 'Home', url: '/' },
      { text: 'Profile', url: '/profile' },
      // { text: 'Sign In', url: '/sign-in' },
      // { text: 'Sign Up', url: '/sign-up' },
      { text: 'Products', url: '/product-search' }
    ]

    const handleSignOut = () => {
      signOut(auth)
      // isLoggedIn.value = false
    }

    return {
      menuItems,
      // isLoggedIn,
      handleSignOut,
      user
    }
  }
}
</script>
<style scoped>
li {
  list-style-type: none;
}
.nav-item {
  text-decoration: none;
  color: black;
}
</style>
