import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'admin-lte/plugins/fontawesome-free/css/all.min.css'
import 'admin-lte/dist/css/adminlte.min.css?v=3.2.0'
import 'admin-lte/plugins/toastr/toastr.min.css'


import 'admin-lte/plugins/jquery/jquery.min.js'
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js'
import 'admin-lte/dist/js/adminlte.min.js?v=3.2.0'
import 'admin-lte/plugins/toastr/toastr.min.js'

createApp(App).use(router).mount('#app')
