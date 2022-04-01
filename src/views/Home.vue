<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-title> Test </v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <page-builder gui="home"></page-builder>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import PersonCard from "@/components/PersonCard";
import PageBuilder from "@/components/PageBuilder/PageBuilder";
export default {
  name: "Home",
  components: {PageBuilder, PersonCard}
}
</script>

<style scoped>

</style>