<template>
  <v-row class="pt-4">
    <v-col v-for="index in Number(cols)" :key="index">
      <page-builder :gui="component.id+'-child-'+index"></page-builder>
    </v-col>
  </v-row>
</template>

<script>

import {mapMutations} from "vuex";
export default {
  name: "PageBuilderColumns",
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