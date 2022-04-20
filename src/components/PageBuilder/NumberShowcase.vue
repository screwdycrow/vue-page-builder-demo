<template>
<v-card>
  <v-card-title>{{label}}</v-card-title>
  <v-card-text>
  <span style="font-size:2em" >
    {{value}} </span>
  </v-card-text>
</v-card>
</template>

<script>
import BaseStyleMixin from "@/vuepagebuilder/components/BaseStyleMixin";

export default {
  props:{
    label:String,
    bind:String
  },
  mixins:[BaseStyleMixin],
  name: "NumberShowcase",
  computed: {
    value() {
      if (this.$store.getters[this.bind]) {
        return this.$store.getters[this.bind].length
      } else {
        return '-'
      }
    }
  }
}
</script>

<style scoped>

</style>