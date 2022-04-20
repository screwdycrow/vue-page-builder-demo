import {findIndex} from "core-js/internals/array-iteration";
import PageBuilderPage from "@/vuepagebuilder/components/core/PageBuilderPage";

export const pagesModule = {
    namespaced: true,
    state: () => ({
        editPages:false,
        pages: [
        ],
    }),
    actions: {
        getPages({commit}) {
            return new Promise(resolve=>{
                const pages = localStorage.getItem('VPPages')
                commit('setPages', JSON.parse([pages]))
                resolve(pages)
            })
        },
        savePages({state}) {
            localStorage.setItem('VPPages', JSON.stringify(state.pages))
        }
    },
    mutations: {
        toggleEditPages(state){
            state.editPages = !state.editPages;
        },
        addPage(state, {name, path, group,description}) {
            state.pages.push({name: name, path: path, group: group,description:description})
        },
        setPages(state, pages) {
            state.pages = pages;
        },
        removePage(state, name) {
            const index = state.pages.findIndex(p => p.name === name)
            state.pages.splice(index, 1)
        },
        updatePage(state, page) {
            const index = state.pages.findIndex(p => p.name === page.path)
            console.log(index);
            state.pages[index] = page
        },
    },
    getters:{
        routePages: s => s.pages.map(p => ({
            name: p.name,
            path: p.path,
            component: PageBuilderPage,
            props: {page: p.name},
            meta:{description:p.description}
        }))
    }
}