<template>
  <v-list dense nav>
    <v-list-item v-for="page in pages" link :to="page.path" :key="page.name">
      <v-list-item-content>
        <v-list-item-title> {{page.name}} </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "PageBuilderPagesList",
  methods:{
    goToRoute(){
      this.$router.replace(this.$router.currentRoute.value.fullPath)
    }
  },
  computed:{
    ...mapState('pageBuilderPages',[
        "pages"
    ])
  }
}
</script>

<style scoped>

</style>