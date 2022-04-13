<template>
  <v-row :style="styles" :class="classes">
    <v-col v-for="index in Number(cols)" :key="index">
      <page-builder :gui="component.id+'-child-'+index"></page-builder>
    </v-col>
  </v-row>
</template>

<script>

import {mapMutations} from "vuex";
import baseStyleMixin from "@/vuepagebuilder/components/BaseStyleMixin";
export default {
  name: "PageBuilderColumns",
  mixins:[baseStyleMixin],
  props:{
    component:{type:Object},
    cols:{type:Number, required:false, default:1 },
  },
  created() {
  },
  methods:{
   ...mapMutations('pageBuilder',[
       "initGui"
   ])
  }

}
</script>

<style scoped>

</style>