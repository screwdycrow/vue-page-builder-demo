import {createApp} from 'vue'
import {createStore} from 'vuex'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import {loadFonts} from './plugins/webfontloader'
import {store} from "@/store";
import VueApexCharts from "vue3-apexcharts";
import VuePageBuilder from "@/plugins/vuepagebuilder";
import router from './router'

loadFonts()
import 'bulma/css/bulma.min.css'
const app = createApp(App)
    .use(vuetify)
    .use(store)
    .use(VuePageBuilder, {store, router})
    .use(router)
    .use(VueApexCharts)
    .mount('#app')

