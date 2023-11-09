<template>
  <nav class="d-flex gap-1 align-items-center">
    <li v-for="item in menuItems" :key="item.text || item.image" class="nav-item-container">
      <router-link v-if="item.text" :to="item.url" class="nav-item">{{ item.text }}</router-link>
      <router-link v-else :to="item.url"><img :src="item.image" class="nav-logo" /></router-link>
    </li>

    <li v-if="user" class="logout-button">
      <button class="nav-item" @click="handleSignOut">
        Logged in as {{ user.email || 'New User' }} | Sign Out
      </button>
    </li>

    <li v-if="!user" class="login">
      <router-link to="/sign-in" class="nav-item">Login/Register</router-link>
    </li>
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
      { image: 'src/images/Logo.jpg', url: '/' },
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
.nav-item-container {
  width: 20%;
}
.login {
  width: 25%;
}
.nav-item {
  text-decoration: none;
  color: white;
  background: #0a3684;
  display: block;
  width: 100%;
  text-align: center;
  height: 3rem;
  padding: 10px;
}

.nav-logo {
  text-decoration: none;
  color: white;

  display: block;
  width: 100%;
  text-align: center;
  height: auto;
  padding: 10px;
}
.logout-button {
  width: 25%;
}
</style>
