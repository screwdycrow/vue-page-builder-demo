<template>
<v-btn :class="classes" :style="styles" :to="to" :color="color"> {{label}} </v-btn>
</template>

<script>
import BaseStyleMixin from "@/vuepagebuilder/components/BaseStyleMixin";

export default {
  name: "PageBuilderButton",
  mixins:[BaseStyleMixin],
  props:{
    label:String,
    to:String,
    color:String,
  }
}
</script>

<style scoped>

</style>