<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="navigation =!navigation"></v-app-bar-nav-icon>
      <v-app-bar-title> Test</v-app-bar-title>
      <page-builder-toggle-edit></page-builder-toggle-edit>
      <global-toggle-edit-page></global-toggle-edit-page>
    </v-app-bar>
    <v-navigation-drawer color="#EAEAEAFF" width="300" v-model="navigation">
      <global-page-builder class="mt-3" gui="sidebar"></global-page-builder>
      <v-list dense nav>
        <v-list-item link to="/">
          <v-list-item-content>
            <v-list-item-title> Home Page</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="second">
          <v-list-item-content>
            <v-list-item-title> Manage Pages </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import {mapActions, mapMutations, mapState} from "vuex";
import {store} from "@/store";
import {pageBuilderModule} from "@/vuepagebuilder/modules/PageBuilderModule";
import GlobalPageBuilder from "@/vuepagebuilder/components/core/GlobalPageBuilder";
import GlobalToggleEditPage from "@/vuepagebuilder/components/core/GlobalToggleEditPage";

export default {
  name: 'App',
  components: {GlobalToggleEditPage, GlobalPageBuilder},
  data: () => ({
    navigation: true
  }),
  created() {
    this.getGuis();
  },

  computed: {
    ...mapState('pageBuilder', [
      "editPage"
    ])
  },

  methods: {
    ...mapActions('pageBuilderGlobals', [
      'getGuis'
    ]),
    ...mapMutations('pageBuilder', [
      "toggleEditPage",
      "setPageName",
    ])
  }
}
</script>

<style lang="scss">

</style>
