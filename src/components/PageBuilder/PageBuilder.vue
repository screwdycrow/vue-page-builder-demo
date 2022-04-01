<template>
  <div :class="{'page-builder':true,'edit':editPage}">
    <div class="component-wrapper" v-for="component in componentStructure(gui)">
      <v-toolbar color="transparent" density="compact" dense v-if="editPage" >
        <v-toolbar-title> {{componentTypes[component.type].label}} </v-toolbar-title>
        <v-btn icon="mdi-delete" size="small" @click="removeComponentClick(component.id)" flat></v-btn>
      </v-toolbar>
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
import DataTable from "@/components/DataTable";

export default {
  name: "PageBuilder",
  components: markRaw({PersonCard, AddComponentForm, IncomeGraph, DataTable}),
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
    removeComponentClick(id) {
      this.removeComponent({gui: this.gui, id: id})
    },
    ...mapMutations('pageBuilder', [
      "removeComponent",
      "initGui"
    ])
  }
}
</script>

<style scoped>
.edit {
  padding:20px 20px 0px 20px;
  border: dotted gray 1px;

}
.edit .component-wrapper {
  padding: 10px;
  border: dashed gray 1px;
}

</style>