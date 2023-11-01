import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import SignInView from '../views/SignInView.vue'
import SignUpView from '../views/SignUpView.vue'
import ProductSearchView from '../views/ProductSearchView.vue'
import ProductPaymentView from '../views/ProductPaymentView.vue'

import { getAuth, onAuthStateChanged } from 'firebase/auth'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/profile', name: 'Profile', component: ProfileView, meta: { requiresAuth: true } },
    { path: '/sign-in', name: 'SignIn', component: SignInView },
    { path: '/sign-up', name: 'SignUp', component: SignUpView },
    { path: '/product-search', name: 'Products', component: ProductSearchView },
    { path: '/checkout', name: 'Checkout', component: ProductPaymentView }
  ]
})

// firebase hasn't loaded yet when we refresh, so the sign out button will stay even if we are signed out. We want to add this to avoid that
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener
        resolve(user)
      },
      reject
    )
  })
}

// hook that runs before vue router processes its routes
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next()
    } else {
      alert("you don't have access!")
      next('/')
    }
  } else {
    next()
  }
})
export default router
