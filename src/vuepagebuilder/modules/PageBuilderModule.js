
export const pageBuilderModule = {
    namespaced: true,
    state: () => ({
        editPage: false,
        tempGuis: {},
        pageName: 'gui',
        guis: {},
        types: {},
    }),

    actions: {

        saveGuis({state, commit}) {
            localStorage.setItem(state.pageName, JSON.stringify(state.guis))
            commit('toggleEditPage')
        },
        getGuis({state, commit}) {
            commit('clearGuis');
            const guis = localStorage.getItem(state.pageName)
            if (guis) commit('setGuis', JSON.parse(guis))
        }
    },
    mutations: {
        initGui(state, gui) {
            if (state.guis[gui] === undefined) {
                state.guis[gui] = []
            }
        },
        clearGuis(state){
         state.guis = {};
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
                if (gui.startsWith(id + '-child-')) {
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