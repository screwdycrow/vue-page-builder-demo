import {createApp} from 'vue'
import {createStore} from 'vuex'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import {loadFonts} from './plugins/webfontloader'
import {store} from "@/store";

loadFonts()

const app = createApp(App)
    .use(vuetify)
    .use(store)
    .mount('#app')
