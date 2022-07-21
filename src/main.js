import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHouse, faUser, faDollarSign, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faHouse)
library.add(faUser)
library.add(faDollarSign)
library.add(faCircleInfo)


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
import "bootstrap/dist/js/bootstrap.min.js"
