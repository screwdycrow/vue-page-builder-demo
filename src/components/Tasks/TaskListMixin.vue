
<script>
import TaskItem from "@/components/Tasks/TaskItem";
import baseStyleMixin from "@/vuepagebuilder/components/BaseStyleMixin";
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  name: "TaskListMixin",
  components: {TaskItem},
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