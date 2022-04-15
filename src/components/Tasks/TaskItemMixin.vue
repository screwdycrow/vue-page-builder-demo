
<script>
import Task from "@/components/Tasks/Task";
import {mapActions} from "vuex";

export default {
  name: "TaskItemMixin",
  props:{task: Task},
  methods:{
    toggleDone(){
      this.task.isDone = !this.task.isDone;
      this.putTask(this.task);
    },
    ...mapActions('tasks',[
      "putTask"
    ])
  }
}
</script>

<style scoped>

</style>