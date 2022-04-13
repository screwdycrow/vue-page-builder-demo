import PersonCard from "@/components/PersonCard";
import {markRaw} from "vue";
import IncomeGraph from "@/components/IncomeGraph";
import DataTable from "@/components/DataTable";
import {basicProps} from "@/vuepagebuilder/props/BasicProps";
import PageBuilderToolbar from "@/vuepagebuilder/components/PageBuilderToolbar";
import PageBuilderColumns from "@/vuepagebuilder/components/PageBuilderColumns";
import TaskList from "@/components/Tasks/TaskList";
import AddTask from "@/components/Tasks/AddTask";
import PageBuilderSpacer from "@/vuepagebuilder/components/PageBuilderSpacer";
import {baseStyleProps} from "@/vuepagebuilder/props/BaseStyleProps";

export const pageBuilderModule = {
    namespaced: true,
    state: () => ({
        editPage: false,
        tempGuis: {},
        pageName: 'gui',
        guis: {
        },
        types: {

        },
    }),

    actions: {
        saveGuis({state, commit},) {
            localStorage.setItem(state.pageName, JSON.stringify(state.guis))
            commit('toggleEditPage')
        },
        getGuis({state, commit}, pageName) {
            const guis = localStorage.getItem(pageName)
            if (guis) commit('setGuis', JSON.parse(guis))
        }
    },
    mutations: {
        initGui(state, gui) {
            if (state.guis[gui] === undefined) {
                state.guis[gui] = []
            }
        },
        setTypes(state,types){
          state.types = types;
        },
        setGuis(state, guis) {
            state.guis = guis
        },
        setPageName(state, pageName) {
            state.pageName = pageName
        },
        toggleEditPage(state) {
            state.tempGuis = JSON.parse(JSON.stringify(state.guis))
            state.editPage = !state.editPage;
        },
        cancelEditPage(state) {
            state.guis = JSON.parse(JSON.stringify(state.tempGuis))
            state.editPage = !state.editPage;
        },
        removeComponent(state, {gui, id}) {
            const index = state.guis[gui].findIndex(c => c.id === id)
            state.guis[gui].splice(index, 1)
        },
        removeComponentChildGuis(state, id) {
            for (const gui in state.guis) {
                if (state.guis.hasOwnProperty(gui) && gui.startsWith(id + '-child-')) {
                    delete state.guis[gui];
                }
            }
        },
        moveComponentUp(state, {gui, id}) {
            const index = state.guis[gui].findIndex(c => c.id === id)
            let component = state.guis[gui].splice(index, 1)[0];
            state.guis[gui].splice(index - 1, 0, component)
        },
        moveComponentDown(state, {gui, id}) {
            const index = state.guis[gui].findIndex(c => c.id === id)
            let component = state.guis[gui].splice(index, 1)[0];
            state.guis[gui].splice(index + 1, 0, component)
        },
        addComponent(state, {gui, type, props}) {
            const component = {
                type: type,
                id: Math.random().toString(36).substring(2, 9)
            }
            if (props) component.props = props
            state.guis[gui].push(component)
        },
        updateComponent(state, {gui, props, id}) {
            const index = state.guis[gui].findIndex(c => c.id === id)
            state.guis[gui][index].props = props;
        }
    },
    getters: {
        componentTypes: (s) => s.types,
        componentStructure: (s) => (gui) => {
            return s.guis[gui]
        }
    }
}