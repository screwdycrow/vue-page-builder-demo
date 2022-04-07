<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-title> Test </v-app-bar-title>
    <toggle-edit-page></toggle-edit-page>
    </v-app-bar>
    <v-main>
      <v-container >
        <page-builder gui="home-1"></page-builder>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import PersonCard from "@/components/PersonCard";
import PageBuilder from "@/components/PageBuilder/PageBuilder";
import {mapMutations, mapState} from "vuex";
import ToggleEditPage from "@/components/PageBuilder/ToggleEditPage";
import IncomeGraph from "@/components/IncomeGraph";
export default {
  name: "Home",
  components: {IncomeGraph, ToggleEditPage, PageBuilder, PersonCard},
  computed:{
    ...mapState('pageBuilder',[
        "editPage"
    ])
  },
  methods:{
    ...mapMutations('pageBuilder',[
        "toggleEditPage"
    ])
  }
}
</script>

<style scoped>

</style>