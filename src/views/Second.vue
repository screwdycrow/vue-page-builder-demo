<template>
<page-builder gui="Second"></page-builder>
</template>

<script>
import {store} from "@/store";
import PageBuilder from "@/vuepagebuilder/components/core/PageBuilder";

export default {
  name: "Second",
  components: {PageBuilder},
  created() {
    store.commit('pageBuilder/setPageName','Second')
    store.dispatch('pageBuilder/getGuis')
  }
}
</script>

<style scoped>

</style>