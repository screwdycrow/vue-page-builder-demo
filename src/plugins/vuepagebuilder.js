import {createPageBuilder} from "@/vuepagebuilder";
import {store} from "@/store";
import PageBuilderSpacer from "@/vuepagebuilder/components/PageBuilderSpacer";
import DataTable from "@/components/DataTable";
import IncomeGraph from "@/components/IncomeGraph";
import {basicProps} from "@/vuepagebuilder/props/BasicProps";
import PageBuilderToolbar from "@/vuepagebuilder/components/PageBuilderToolbar";
import PageBuilderColumns from "@/vuepagebuilder/components/PageBuilderColumns";
import {baseStyleProps} from "@/vuepagebuilder/props/BaseStyleProps";
import TaskList from "@/components/Tasks/TaskList";
import AddTask from "@/components/Tasks/AddTask";
import PersonCard from "@/components/PersonCard";
import {markRaw} from "vue";

export default createPageBuilder({
        'PageBuilderSpacer': {
            component: markRaw(PageBuilderSpacer),
            label: 'Spacer',
            description: 'Spacer',
            props: {space: {type: String, default: '10px'}}
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
                label: {type: 'text', label: 'Κείμενο'}
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
});
