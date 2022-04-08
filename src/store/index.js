
import {createStore} from "vuex";
import {pageBuilderModule} from "@/components/PageBuilder/PageBuilderModule";
import {tasksModule} from "@/components/Tasks/tasksModule";

export const store =  createStore({
    state() {
        return {}
    },
    mutations: {},
    modules:{
        pageBuilder:pageBuilderModule,
        tasks:tasksModule
    }
})
