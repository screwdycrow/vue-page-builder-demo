import PersonCard from "@/components/PersonCard";
import {markRaw} from "vue";
import IncomeGraph from "@/components/IncomeGraph";
import DataTable from "@/components/DataTable";
import {basicProps} from "@/components/PageBuilder/basic/BasicProps";
import PageBuilderToolbar from "@/components/PageBuilder/basic/PageBuilderToolbar";
import PageBuilderColumns from "@/components/PageBuilder/basic/PageBuilderColumns";
import TaskList from "@/components/Tasks/TaskList";
import AddTask from "@/components/Tasks/AddTask";
import PageBuilderSpacer from "@/components/PageBuilder/basic/PageBuilderSpacer";
import {baseStyleProps} from "@/components/PageBuilder/basic/BaseStyleProps";

export const pageBuilderModule = {
    namespaced: true,
    state: () => ({
        editPage: false,
        tempGuis: {},
        pageName: 'gui',
        guis: {
        },
        types: {
            'PageBuilderSpacer': {
                component: markRaw(PageBuilderSpacer),
                label: 'Spacer',
                description: 'Spacer',
                props: {space:{type:String, default:'10px'}}
            },
            'DataTable': {
                component: markRaw(DataTable),
                label: 'A Datatable ',
                description: 'Shows rows and items',
                props: {}
            },
            'IncomeGraph': {
                component: markRaw(IncomeGraph),
                label: 'An Income Graph ',
                description: 'Shows details of Income per Branch',
                props: {...basicProps}
            },
            'PageBuilderToolbar': {
                component: markRaw(PageBuilderToolbar),
                label: 'Heading',
                description: 'Heading',
                props: {
                }
            },
            'PageBuilderColumns': {
                component: markRaw(PageBuilderColumns),
                label: 'Columns',
                description: 'Generates page builders for  multiple columns',
                props: {
                    ...baseStyleProps,
                    cols: {
                        type: 'number', label: 'Στείλες', default: 1, rules: [
                            (v) => (Number(v) > 0 || 'απαιτείτε αριθμός μεγαλύτερος του 0 ')
                        ]
                    }
                }
            },

            'TaskList': {
                component: markRaw(TaskList),
                label: 'List with Tasks',
                description: 'Shows your tasks',
                props: {
                    ...baseStyleProps,
                    mode:{
                        type: 'select', label: 'mode', default: 'all', items: [
                            {value:'all',text:'All Tasks'},
                            {value:'done',text:'All Done Tasks'},
                            {value:'pending',text:'All Pending Tasks'},
                            {value:'overdue',text:'All Overdue Tasks'},
                        ]
                    }
                }
            },
            'AddTask': {
                ...baseStyleProps,
                component: markRaw(AddTask),
                label: 'Add Task',
                description: 'Add Task Form',
                props: {}
            },
            'PersonCard': {
                component: markRaw(PersonCard),
                label: 'A Person Card',
                description: 'Shows details of a person in your database.',
                props:
                    {
                        ...basicProps,
                        name: {
                            type: 'text', label: 'Ονομα', default: 'Enter Name', rules: [
                                (v) => (v !== '' && v !== null) || 'To όνομα απαιτείται'
                            ]
                        },
                        color: {
                            type: 'color', label: 'Χρώμα Κάρτας', default: '#aaaaaa', rules: []
                        }
                    }
            }
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