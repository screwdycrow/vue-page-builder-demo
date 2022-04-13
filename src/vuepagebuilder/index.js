import {pageBuilderModule} from "@/vuepagebuilder/modules/PageBuilderModule";

export function createPageBuilder (componentTypes){
    return {
        install: (app,{store}) => {
            store.registerModule('pageBuilder', pageBuilderModule)
            store.commit('pageBuilder/setTypes', componentTypes)
            console.log(store)
        }
    }

}
