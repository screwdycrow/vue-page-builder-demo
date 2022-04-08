<template>
  <v-list-item>
    <v-list-item-action>
      <v-checkbox hide-details v-model="task.isDone"></v-checkbox>
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

export default {
  name: "TaskItem",
  props:{task: Task}
}
</script>

<style scoped>

</style>