<template>
  <page-builder :gui="'main-'+pageName"></page-builder>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";
import PageBuilder from "@/vuepagebuilder/components/core/PageBuilder";

export default {
  name: "PageBuilderPage",
  components: {PageBuilder},
  props: {
    pageName: String
  },
  beforeRouteUpdate(to, from, next) {
    this.setPageName(to.name)
    this.getGuis()
    next()
  },
  updated() {
    this.setPageName(this.pageName)
    this.getGuis()
  },
  computed: {
    ...mapState('pageBuilder', [
      "pageName"
    ])
  },
  methods: {
    ...mapActions('pageBuilder', [
      'getGuis'
    ]),
    ...mapMutations('pageBuilder', [
      'setPageName'
    ])
  }
}
</script>

<style scoped>

</style>