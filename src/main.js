import {createApp} from 'vue'
import {createStore} from 'vuex'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import {loadFonts} from './plugins/webfontloader'
import {store} from "@/store";
import VueApexCharts from "vue3-apexcharts";
import PageBuilder from "@/vuepagebuilder/components/PageBuilder";
import vuepagebuilder from "@/plugins/vuepagebuilder";

loadFonts()


const app = createApp(App)
    .use(vuetify)
    .use(store)
    .use(vuepagebuilder, {
        store
    })
    .use(VueApexCharts)
    .component('PageBuilder',PageBuilder)
    .mount('#app')
