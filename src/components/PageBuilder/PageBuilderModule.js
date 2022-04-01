import PersonCard from "@/components/PersonCard";
import {markRaw} from "vue";
import IncomeGraph from "@/components/IncomeGraph";
import DataTable from "@/components/DataTable";
import {basicProps} from "@/components/PageBuilder/BasicProps";
import PageBuilderToolbar from "@/components/PageBuilder/basic/PageBuilderToolbar";

export const pageBuilderModule = {
    namespaced: true,
    state: () => ({
        editPage: false,
        tempGuis: {},
        guis: {
            'home-row-1': [
                {
                    id: '123456',
                    type: 'PersonCard',
                    props: {
                        name: 'Dimitrios Tzilivakis',
                        color: 'blue'
                    }
                },
                {
                    id: '123456',
                    type: 'PersonCard',
                    props: {
                        name: 'Dimitrios Tzilivakis',
                        color: 'blue'
                    }
                },
                {
                    id: '123456',
                    type: 'PersonCard',
                    props: {
                        name: 'Dimitrios Tzilivakis',
                        color: 'blue'
                    }
                }
            ]

        },
        types: {
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
                description:'Heading',
                props:{
                    ...basicProps
                }
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
        saveGuis({state, commit}) {
            localStorage.setItem('guis', JSON.stringify(state.guis))
            commit('toggleEditPage')
        },
        getGuis({state, commit}) {
            const guis = localStorage.getItem('guis')
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
        updateComponent(state,{gui,props,id}){
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