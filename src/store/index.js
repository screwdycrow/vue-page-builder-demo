
import {createStore} from "vuex";
import {tasksModule} from "@/components/Tasks/tasksModule";

export const store =  createStore({
    state() {
        return {}
    },
    mutations: {},
    modules:{
        tasks:tasksModule
    }
})
