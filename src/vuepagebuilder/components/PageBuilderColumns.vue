<template>
  <div :style="styles" class='columns' :class="classes">
    <div class="column" v-for="index in Number(cols)" :key="index">
      <page-builder :gui="component.id+'-child-'+index"></page-builder>
    </div>
  </div>
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
  }

}
</script>

<style scoped>

</style>