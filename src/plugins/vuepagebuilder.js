import {createPageBuilder} from "@/vuepagebuilder";
import {store} from "@/store";
import PageBuilderSpacer from "@/vuepagebuilder/components/PageBuilderSpacer";
import DataTable from "@/components/DataTable";
import IncomeGraph from "@/components/IncomeGraph";
import {basicProps} from "@/vuepagebuilder/props/BasicProps";
import PageBuilderToolbar from "@/components/PageBuilderToolbar";
import PageBuilderColumns from "@/vuepagebuilder/components/PageBuilderColumns";
import {baseStyleProps} from "@/vuepagebuilder/props/BaseStyleProps";
import TaskList from "@/components/Tasks/TaskList";
import AddTask from "@/components/Tasks/AddTask";
import PersonCard from "@/components/PersonCard";
import {markRaw} from "vue";
import PageBuilderPagesList from "@/components/PageBuilder/PageBuilderPagesList";
import PageForm from "@/vuepagebuilder/components/core/PageForm";
import NumberBadge from "@/components/PageBuilder/NumberBadge";
import PageListEditor from "@/vuepagebuilder/components/core/PageListEditor";
import NumberShowcase from "@/components/PageBuilder/NumberShowcase";
import {VBtn} from "vuetify/lib/components";
import PageBuilderButton from "@/components/PageBuilder/PageBuilderButton";

export default createPageBuilder({
    'PageBuilderSpacer': {
        isGlobal: true,
        component: markRaw(PageBuilderSpacer),
        label: 'Spacer',
        description: 'Spacer',
        props: {space: {type: String, default: '10px'}}
    },
    'DataTable': {
        isGlobal: true,
        component: markRaw(DataTable),
        label: 'A Datatable ',
        description: 'Shows rows and items',
        props: {}
    },
    'IncomeGraph': {
        isGlobal: true,
        component: markRaw(IncomeGraph),
        label: 'An Income Graph ',
        description: 'Shows details of Income per Branch',
        props: {...basicProps}
    },
    'PageBuilderToolbar': {
        isGlobal: true,
        component: markRaw(PageBuilderToolbar),
        label: 'Heading',
        description: 'Heading',
        props: {
            label: {type: 'text', label: 'Κείμενο'}
        }
    },
    'PageBuilderColumns': {
        isGlobal: true,
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
        isGlobal: true,
        component: markRaw(TaskList),
        label: 'List with Tasks',
        description: 'Shows your tasks',
        props: {
            ...baseStyleProps,
            mode: {
                type: 'select', label: 'mode', default: 'all', items: [
                    {value: 'all', text: 'All Tasks'},
                    {value: 'done', text: 'All Done Tasks'},
                    {value: 'pending', text: 'All Pending Tasks'},
                    {value: 'overdue', text: 'All Overdue Tasks'},
                ]
            }
        }
    },
    'AddTask': {
        component: markRaw(AddTask),
        label: 'Add Task',
        description: 'Add Task Form',
        props: {
            ...baseStyleProps,
        }
    },
    'PageBuilderPagesList': {
        isGlobal: true,
        component: markRaw(PageBuilderPagesList),
        label: 'List of custom pages',
        description: 'shows a list of custom pages',
        props: {
            group: {
                type: 'Text', label: 'Group', default: ''
            },
            ...baseStyleProps,
        }
    },

    'NumberBadge': {
        isGlobal: true,
        component: markRaw(NumberBadge),
        label: 'A Badge showing the length of an array ',
        description: 'shows a list of custom pages',
        props: {
            label: {
                type: 'text', label: 'Label', default: ''
            },
            bind: {
                type: 'text', label: 'Binding Source', default: ''
            },
            ...baseStyleProps,
        }
    },
    'NumberShowcase': {
        isGlobal: true,
        component: markRaw(NumberShowcase),
        label: 'Showcase Number',
        description: 'shows a list of custom pages',
        props: {
            label: {
                type: 'text', label: 'Label', default: ''
            },
            bind: {
                type: 'text', label: 'Binding Source', default: ''
            },
            ...baseStyleProps,
        }
    },
    'PageListEditor': {
        isGlobal: true,
        component: markRaw(PageListEditor),
        label: 'Manage Pages',
        description: 'Delete/Edit Pages',
        props: {
            ...baseStyleProps,
        }
    },
    'PageForm': {
        isGlobal: true,
        component: markRaw(PageForm),
        label: 'Add Custom Page',
        description: 'Adds Custom Page to Page Builder',
        props: {
            ...baseStyleProps,
        }
    },
    'PageBuilderButton': {
        component: markRaw(PageBuilderButton),
        label: 'Button',
        props:{
            ...baseStyleProps,
            to:{type:'text', label:'διαδρομή'},
            color:{type:'color', label:'Χρώμα', default:''},
            label:{type:'text', label:'Κείμενο', default:'button'}
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
});
