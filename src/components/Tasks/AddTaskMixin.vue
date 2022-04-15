
<script>
import Task from "@/components/Tasks/Task";
import {mapActions} from "vuex";

export default {
  name: "AddTaskMixin",
  data:()=>({
    task: new Task()
  }),
  methods:{
    ...mapActions('tasks',[
      "postTask"
    ])
  }

}
</script>

<style scoped>

</style>