<template>
  <v-toolbar v-if="componentLabel">
    <v-toolbar-title>{{componentLabel}}</v-toolbar-title>
  </v-toolbar>

</template>

<script>
import {basicProps} from "@/components/PageBuilder/BasicProps";
import basicComponentPropsMixin from "@/components/PageBuilder/basic/BasicComponentPropsMixin";

export default {
  name: "PageBuilderToolbar",
  mixins:[basicComponentPropsMixin],
  props:{
  }
}
</script>

<style scoped>

</style>