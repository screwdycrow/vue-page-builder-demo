
import {createStore} from "vuex";
import {pageBuilderModule} from "@/components/PageBuilder/PageBuilderModule";

export const store =  createStore({
    state() {
        return {}
    },
    mutations: {},
    modules:{
        pageBuilder:pageBuilderModule
    }
})
