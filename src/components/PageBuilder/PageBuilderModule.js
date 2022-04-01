import PersonCard from "@/components/PersonCard";
import {markRaw} from "vue";

export const pageBuilderModule = {
    namespaced: true,
    state: () => ({
        guis: {
            'home': [
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
            'PersonCard': {
                component: markRaw(PersonCard),
                label: 'A Person Card',
                description: 'Shows details of a person in your database.',
                props:
                    {
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

    mutations: {
        addComponent({state}, {gui, type, props}) {
            state.guis[gui].push({
                type: type,
                props: props,
                id: Math.random().toString(36).substring(2, 9)
            })
        }
    },
    getters: {
        componentTypes: (s) => s.types,
        componentStructure: (s) => (gui) => {
            return s.guis[gui]
        }
    }
}