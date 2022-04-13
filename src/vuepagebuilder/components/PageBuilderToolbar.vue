<template>
  <v-toolbar color="color" v-if="label">
    <v-toolbar-title>{{label}}</v-toolbar-title>
  </v-toolbar>

</template>

<script>
import {basicProps} from "@/vuepagebuilder/props/BasicProps";
import basicComponentPropsMixin from "@/vuepagebuilder/components/BasicComponentPropsMixin";
import baseStyleMixin from "@/vuepagebuilder/components/BaseStyleMixin";

export default {
  name: "PageBuilderToolbar",
  mixins:[baseStyleMixin],
  props:{
    label:String,
  }
}
</script>

<style scoped>

</style>