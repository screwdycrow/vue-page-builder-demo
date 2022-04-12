import {findIndex} from "core-js/internals/array-iteration";

export const tasksModule = {
    namespaced: true,
    state: () => ({
        tasks: []
    }),
    actions: {
        postTask({commit, state}, task) {
            return new Promise(resolve => {
                setTimeout(() => {
                    task.id = task.id = Math.random().toString(36).substring(2, 9)
                    commit('addTask', task)
                    localStorage.setItem('tasks', JSON.stringify(state.tasks))
                    resolve(task)
                },100)
            })
        },
        deleteTask({commit, state},id){
            return new Promise(resolve => {
                setTimeout(()=>{
                    commit('removeTask',id)
                    localStorage.setItem('tasks', JSON.stringify(state.tasks))
                    resolve(true)
                })
            })
        },
        putTask({commit, state}, task){
            commit('updateTask', task )
            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        },
        getTasks({commit}) {
            return new Promise(resolve => {
                setTimeout(() => {
                    let tasks = localStorage.getItem('tasks');
                    resolve(JSON.parse(tasks))
                }), 2500
            }).then(resp => {
                commit('setTasks', resp)
                return Promise.resolve();
            })
        }
    },
    mutations: {
        updateTask(state, task) {
            const index = state.tasks.findIndex(t => t.id === task.id)
            state.tasks[index] = task;
        },
        setTasks(state, tasks) {
            state.tasks = tasks;
        },
        addTask(state, task) {
            if(state.tasks === null ) state.tasks = []
            state.tasks.push(Object.assign({},task))
            return task;
        },
        removeTask(state, id) {
            const index = state.tasks.findIndex(t => t.id === id)
            state.tasks.splice(index, 1);
        }
    },
    getters:{
        doneTasks: s => s.tasks.filter(t=>t.isDone),
        pendingTasks: s => s.tasks.filter(t=>!t.isDone),
        overdueTasks: s => s.tasks.filter(t=> t.deadLine && !t.isDone && (new Date(t.deadLine).getTime() < new Date().getTime()))
    }
}