<template>
  <v-card>
    <v-list>
      <task-item v-for="task in tasks" :task="task" :key="task.id"></task-item>
    </v-list>
  </v-card>
</template>

<script>
import {mapActions, mapState} from "vuex";
import TaskItem from "@/components/Tasks/TaskItem";

export default {
  name: "TaskList",
  components: {TaskItem},
  computed: {
    ...mapState('tasks', [
      "tasks"
    ]),
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