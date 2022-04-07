<template>
  <v-row class="pt-4">
    <v-col v-for="index in Number(cols)" :key="index">
      <page-builder :gui="`${gui}-${index}`"></page-builder>
    </v-col>
  </v-row>
</template>

<script>
import PageBuilder from "@/components/PageBuilder/PageBuilder";
export default {
  name: "PageBuilderColumns",
  components: {PageBuilder},
  props:{
    cols:{type:String, required:false, default:'1' },
    gui:{type:String, required:true, default:'row'}
  }

}
</script>

<style scoped>

</style>