import {createApp} from 'vue'
import {createStore} from 'vuex'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import {loadFonts} from './plugins/webfontloader'
import {store} from "@/store";
import VueApexCharts from "vue3-apexcharts";
import PageBuilder from "@/components/PageBuilder/PageBuilder";


loadFonts()


const app = createApp(App)
    .use(vuetify)
    .use(store)
    .use(VueApexCharts)
    .component('PageBuilder',PageBuilder)
    .mount('#app')
