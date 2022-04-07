<template>
  <div :class="{'page-builder':true,'edit':editPage}">
    <div class="component-wrapper" v-for="component in componentStructure(gui)">
      <v-toolbar color="transparent" density="compact" dense v-if="editPage">
        <v-toolbar-title style="font-size:1em; color:grey"> {{ componentTypes[component.type].label }}</v-toolbar-title>
        <component-form :componentModel="component" :gui="gui"></component-form>
        <v-btn icon="mdi-delete" size="small" @click="removeComponentClick(component.id)" flat></v-btn>
        <v-btn icon="mdi-chevron-up" size="small" @click="moveComponentUpClick(component.id)" flat></v-btn>
        <v-btn icon="mdi-chevron-down" size="small" @click="moveComponentDownClick(component.id)" flat></v-btn>
      </v-toolbar>
      <component
          :is="componentTypes[component.type].component"
          v-bind="component.props">
      </component>
    </div>
    <component-form v-if="editPage" :gui="gui"></component-form>
  </div>
</template>

<script>
import {markRaw} from "vue";
import ComponentForm  from "@/components/PageBuilder/ComponentForm";
import PersonCard from "@/components/PersonCard";
import IncomeGraph from "@/components/IncomeGraph";
import {mapGetters, mapMutations, mapState} from "vuex";
import DataTable from "@/components/DataTable";
import PageBuilderToolbar from "@/components/PageBuilder/basic/PageBuilderToolbar";
import PageBuilderColumns from "@/components/PageBuilder/basic/PageBuilderColumns";

export default {
  name: "PageBuilder",
  components: markRaw({PersonCard, ComponentForm, IncomeGraph, DataTable,PageBuilderToolbar, PageBuilderColumns}),
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
    moveComponentUpClick(id){
      this.moveComponentUp({gui:this.gui, id:id})
    },
    moveComponentDownClick(id){
      this.moveComponentDown({gui:this.gui, id:id})

    },
    ...mapMutations('pageBuilder', [
      "moveComponentUp",
      "moveComponentDown",
      "removeComponent",
      "initGui"
    ])
  }
}
</script>

<style scoped>
.edit {
  padding: 20px 20px 0px 20px;
  border: dotted gray 1px;

}

.edit .component-wrapper {
  padding: 10px;
  border: dashed gray 1px;
}

</style>