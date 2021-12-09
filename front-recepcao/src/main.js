import { createApp } from 'vue'
import Home from './Home.vue'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'
import router from './router'
// import axios from 'axios'

createApp(Home).use(router).mount('#app')