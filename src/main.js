import { createApp } from 'vue'
import App from '@/App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
  faEye,
  faEyeSlash,
  faUserSecret,
  faCartShopping,
  faXmark
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faEye, faEyeSlash, faCartShopping, faXmark)
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyALx8RfOkMABgyPcPH0iXj7lnu_NezWapU',
  authDomain: 'datamed-13891.firebaseapp.com',
  databaseURL: 'https://datamed-13891-default-rtdb.firebaseio.com',
  projectId: 'datamed-13891',
  storageBucket: 'datamed-13891.appspot.com',
  messagingSenderId: '135159147198',
  appId: '1:135159147198:web:dcd503d464c1019f1a0cef'
}

initializeApp(firebaseConfig)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App)
  .use(router)
  .use(BootstrapVue)
  .use(IconsPlugin)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
