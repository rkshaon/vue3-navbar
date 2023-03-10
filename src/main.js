import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.js'

const app = createApp(App);

app.mount('#app')

// import Vue from 'vue'
// import App from './App.vue'
// // import './registerServiceWorker'
// // import router from './router'
// // import store from './store'
// import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

// Vue.config.productionTip = false

// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// new Vue({
// //   router,
// //   store,
//   render: h => h(App)
// }).$mount('#app')