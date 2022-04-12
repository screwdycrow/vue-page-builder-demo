<template>
  <v-toolbar color="color" v-if="componentLabel">
    <v-toolbar-title>{{componentLabel}}</v-toolbar-title>
  </v-toolbar>

</template>

<script>
import {basicProps} from "@/components/PageBuilder/basic/BasicProps";
import basicComponentPropsMixin from "@/components/PageBuilder/basic/BasicComponentPropsMixin";
import baseStyleMixin from "@/components/PageBuilder/basic/BaseStyleMixin";

export default {
  name: "PageBuilderToolbar",
  mixins:[baseStyleMixin],
  props:{
  }
}
</script>

<style scoped>

</style>