<template>
  <div class="page-builder">
    <div class="component-wrapper" v-for="component in componentStructure(gui)">
      <component
          :is="componentTypes[component.type].component"
          v-bind="component.props">

      </component>
    </div>

    <add-component-form v-if="editPage" :gui="gui"></add-component-form>
  </div>
</template>

<script>
import {markRaw} from "vue";
import {store} from "@/store";
import {pageBuilderModule} from "@/components/PageBuilder/PageBuilderModule";
import AddComponentForm from "@/components/PageBuilder/AddComponentForm";
import PersonCard from "@/components/PersonCard";
import IncomeGraph from "@/components/IncomeGraph";
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "PageBuilder",
  components: markRaw({PersonCard, AddComponentForm, IncomeGraph}),
  props: {
    gui: String
  },
  computed: {
    ...mapState('pageBuilder', [
      "editPage"
    ]),
    ...mapGetters('pageBuilder', [
      "componentStructure",
      "componentTypes",
    ])
  },
  created() {
    this.initGui(this.gui)
  },
  methods: {
    ...mapMutations('pageBuilder', [
      "initGui"
    ])
  }
}
</script>

<style scoped>

</style>