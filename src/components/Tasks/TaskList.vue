<template>
  <v-card :style="styles" :class="classes">
    <v-list>
      <task-item v-for="task in taskView" :task="task" :key="task.id"></task-item>
    </v-list>
  </v-card>
</template>

<script>

import baseStyleMixin from "@/vuepagebuilder/components/BaseStyleMixin";
import TaskListMixin from "@/components/Tasks/TaskListMixin";

export default {
  name: "TaskList",
  mixins:[baseStyleMixin,TaskListMixin],

}
</script>

<style scoped>

</style>