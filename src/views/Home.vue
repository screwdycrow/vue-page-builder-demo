<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="navigation =!navigation"></v-app-bar-nav-icon>
      <v-app-bar-title> Test </v-app-bar-title>
    <toggle-edit-page></toggle-edit-page>
    </v-app-bar>
    <v-navigation-drawer color="grey" width="300" v-model="navigation">
      <page-builder gui="sidebar"></page-builder>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <page-builder gui="home"></page-builder>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import PersonCard from "@/components/PersonCard";
import PageBuilder from "@/vuepagebuilder/components/PageBuilder";
import {mapActions, mapMutations, mapState} from "vuex";
import ToggleEditPage from "@/vuepagebuilder/components/ToggleEditPage";
import IncomeGraph from "@/components/IncomeGraph";
export default {
  name: "Home",
  data:()=>({
    navigation:true
  }),
  components: {IncomeGraph, ToggleEditPage, PageBuilder, PersonCard},
  computed:{
    ...mapState('pageBuilder',[
        "editPage"
    ])
  },
  created() {
    this.setPageName('Home')
    this.getGuis('Home')
  },
  methods:{
    ...mapActions('pageBuilder',[
        'getGuis'
    ]),
    ...mapMutations('pageBuilder',[
        "toggleEditPage",
        "setPageName",
    ])
  }
}
</script>

<style scoped>

</style>