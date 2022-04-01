<template>
  <div class="page-builder">
    <component v-for="component in componentStructure(gui)"
               :is="componentTypes[component.type].component"
               v-bind="component.props"
    />
    <add-component-form></add-component-form>
  </div>
</template>

<script>
import {markRaw} from "vue";
import {store} from "@/store";
import {pageBuilderModule} from "@/components/PageBuilder/PageBuilderModule";
import AddComponentForm from "@/components/PageBuilder/AddComponentForm";
import PersonCard from "@/components/PersonCard";
import {mapGetters} from "vuex";

export default {
  name: "PageBuilder",
  components: markRaw({PersonCard, AddComponentForm}),
  props: {
    gui: String
  },
  computed:{
    ...mapGetters('pageBuilder',[
        "componentStructure",
        "componentTypes",
    ])
  },
  created() {
  },
}
</script>

<style scoped>

</style>