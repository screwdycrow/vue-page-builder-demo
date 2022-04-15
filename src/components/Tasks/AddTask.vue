<template>
  <v-card>
    <v-card-text>
      <v-form>
        <v-text-field label="Title" v-model="task.title"></v-text-field>
        <v-textarea label="Description" v-model="task.description"></v-textarea>
        <input type="date" v-model="task.deadLine"/>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="postTask(task)"> Add Task </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Task from "@/components/Tasks/Task";
import {mapActions} from "vuex";
import AddTaskMixin from "@/components/Tasks/AddTaskMixin";

export default {
  name: "AddTask",
  mixins:[AddTaskMixin]
}
</script>

<style scoped>

</style>