<template>
  <v-list-item>
    <v-list-item-action>
      <v-checkbox :model-value="task.isDone" hide-details @click="toggleDone()"></v-checkbox>
    </v-list-item-action>
    <div class="pa-2" style="width: 100%">
      <v-list-item-title>
        {{task.title}}
      </v-list-item-title>
      <v-list-item-subtitle>
        {{task.description}}
      </v-list-item-subtitle>
    </div>
    <v-list-item-action>
      {{task.deadLine}}
    </v-list-item-action>
  </v-list-item>
</template>

<script>
import Task from "@/components/Tasks/Task";
import {mapActions} from "vuex";

export default {
  name: "TaskItem",
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