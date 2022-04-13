<template>
  <v-card :style="styles" :class="classes">
    <v-list>
      <task-item v-for="task in taskView" :task="task" :key="task.id"></task-item>
    </v-list>
  </v-card>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import TaskItem from "@/components/Tasks/TaskItem";
import baseStyleMixin from "@/vuepagebuilder/components/BaseStyleMixin";

export default {
  name: "TaskList",
  components: {TaskItem},
  mixins:[baseStyleMixin],
  props:{
    mode:{type:String, default:'all'}
  },
  computed: {
    ...mapState('tasks', [
      "tasks"
    ]),
    ...mapGetters('tasks', [
        'doneTasks',
        'overdueTasks',
        "pendingTasks",
    ]),
    taskView(){
        switch (this.mode){
          case 'all':
            return this.tasks
          case 'done':
            return this.doneTasks
          case 'pending':
            return this.pendingTasks
          case 'overdue':
            return this.overdueTasks
        }
    }

  },
  created() {
    this.getTasks();
  },
  methods: {
    ...mapActions('tasks', ["getTasks"])
  }
}
</script>

<style scoped>

</style>