import { createApp } from 'vue'

//import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'

createApp(App)
.use(VueAxios,axios)
.mount('#app')
